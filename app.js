import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";   
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";


const app = express();

app.use(cookieParser());   // How the server understands the cookies it receives from users
app.use(bodyParser.json());     // How the server understands the data it receives from users. Using .json() to understand not only form but also json
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));   // ex : GET/profile 304 - - 2.873ms
app.use(helmet());        // For security
// arrived at the route, after going through all the above codes

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // 'use' means that if somebody connects with the path '/user', the entire tihs userRouter will be used 
app.use(routes.videos, videoRouter);

export default app;   // To make app.js in unit.js 
