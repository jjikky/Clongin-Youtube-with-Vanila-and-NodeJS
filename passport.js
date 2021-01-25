import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());          // username과 password를 쓰는 인증방식을 사용하기 위함(이미 구성이 된 passport-local의 LocalStrategy를 생성)

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());