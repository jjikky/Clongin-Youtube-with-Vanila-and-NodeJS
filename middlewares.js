import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName ="WeTube";
    res.locals.routes = routes;                    // add routes to routes.js object
    res.locals.user = {
        isAuthenticated: true,
        id : 1
    };
    next();
};