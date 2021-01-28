import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controllers/videoController";


const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView); // edit profile의 url은 /user/edit-profile

export default apiRouter; // export dafult한건 이 파일을 export 하는 거고 변수앞에 export만 하는건 오직 그 변수만 export한다는것
