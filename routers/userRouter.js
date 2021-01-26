import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  changePassword
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile); // edit profile의 url은 /user/edit-profile
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);


userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail); // user detail의 url은 /user/:id 여서 디테일이 더 위에 있으면 edit-profile이 id로 인식될 수 있다 주의!!

export default userRouter; // export dafult한건 이 파일을 export 하는 거고 변수앞에 export만 하는건 오직 그 변수만 export한다는것
