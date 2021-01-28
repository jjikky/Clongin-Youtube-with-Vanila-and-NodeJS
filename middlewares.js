import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY
})

const multerVideo = multer({
    storage: multerS3({
        s3,    // s3: s3
        acl: 'public-read',
        bucket: "wetube-jik/videos",
        region: "us-east-1"
    })
});
const multerAvatar = multer({
    storage: multerS3({
        s3,    // s3: s3
        acl: 'public-read',
        bucket: "wetube-jik/avatars",
        region: "us-east-1"
    })
});

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
export const uploadAvatar = multerAvatar.single("avatar");