import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";   // Because it was not imported by default, use {}

const app = express();

const handleHome = (req,res) => res.send("Hi from Home!!");
const handleProfile =  (req, res) => res.send("You are on my profile");  // New code using babel (arrow function of js)
// Babel allows you to use the new code (ES6~), and converts the new code back to the old code when running in the browser.
// This is old code
//function handleProfile(req,res){
//    res.send("profile");
//} 

app.use(cookieParser());   // How the server understands the cookies it receives from users
app.use(bodyParser.json());     // How the server understands the data it receives from users. Using .json() to understand not only form but also json
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));   // ex : GET/profile 304 - - 2.873ms
app.use(helmet());        // For security
// arrived at the route, after going through all the above codes

app.get('/', handleHome);
app.get('/profile', handleProfile);
app.use('/user', userRouter); // 'use' means that if somebody connects with the path '/user', the entire tihs userRouter will be used 

export default app;   // To make app.js in unit.js 
