import express from "express";
import { getJoin, postJoin, getLogin, postLogin, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);  // To login immediately after join

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPublic, logout);


export default globalRouter;

