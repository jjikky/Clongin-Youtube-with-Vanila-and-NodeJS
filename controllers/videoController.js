import routes from "../routes";
import Video from "../models/Video";

//if you give the name of the template file as an argument to the render() function,
//this function will show after finding the template file with the file name home makeover pug in the folder
export const home = async (req, res) => {  
    try{
        const videos = await Video.find({});   // Using async and await to make this part wait until the end, If you don't make it wait, it will take care of this and move on to the next.
        res.render("home", {pageTitle: 'Home', videos});
    } catch(error){
        console.log(error);
        res.render("home", {pageTitle: 'Home', videos: []});
    }
} 
export const search = (req, res) => {
    const {
        query: {term: searchingBy}
    } = req;
    //const searchingBy = req.query.term;
    res.render("search", {pageTitle: 'Search', searchingBy, videos});
}

export const getUpload = (req, res) => res.render("upload", {pageTitle: 'Upload'});
export const postUpload = (req, res) => {
    const {
        body: {file,title,description}
    } = req;
    // To Do : Upload and save vidoe
    res.redirect(routes.videoDetail(324393));
};
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: 'Video Detail'});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: 'Edit Video'});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: 'Delete Video'});