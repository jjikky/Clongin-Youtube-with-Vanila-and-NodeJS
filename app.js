import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

import "./passport";

const app = express();

const CokieStore = MongoStore(session)

app.use(helmet());        // For security
app.use(function (req, res, next) {                // for get video
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
});
app.set('view engine', "pug");
app.use("/uploads", express.static("uploads"));
//app.use("/static", express.static("static"));
app.use(cookieParser());   // How the server understands the cookies it receives from users
app.use(bodyParser.json());     // How the server understands the data it receives from users. Using .json() to understand not only form but also json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));   // ex : GET/profile 304 - - 2.873ms
app.use(
    session({
        secret: process.env.COOKIE_SECRET,    // For encrypt Session ID
        resave: true,
        saveUninitialized: false,
        store: new CokieStore({ mongooseConnection: mongoose.connection })
    })
)
app.use(passport.initialize());  // get cookie from cookieParser, passport initialize and find User corresponding to cookie
app.use(passport.session());    // then passport makes user it finds object of request(req.user)
app.use(localsMiddleware);
// arrived at the route, after going through all the above codes

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // 'use' means that if somebody connects with the path '/user', the entire tihs userRouter will be used 
app.use(routes.videos, videoRouter);

export default app;   // To make app.js in unit.js 


// app > router, middleware > controller > pug