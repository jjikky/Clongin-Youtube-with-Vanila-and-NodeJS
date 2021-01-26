import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;                    // add routes to routes.js object
    res.locals.loggedUser = req.user || null;     // if loggedUser is not exist >> send null
    next();
};
export const onlyPublic = (req, res, next) => { // allow to access only logined
    if (req.user) {         // if logined
        res.redirect(routes.home);
    } else {
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
};

export const uploadVideo = multerVideo.single('videoFile');