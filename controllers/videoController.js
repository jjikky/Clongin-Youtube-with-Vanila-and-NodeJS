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
export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetail = async(req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);             // Getting Video by ID
        res.render("videoDetail", {pageTitle: video.title, video});
    } catch(error) {
        res.redirect(routes.home);
    }
};

export const getEditVideo = async(req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
    } catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}

export const postEditVideo = async (req, res) => {
    const{
        params : {id},
        body: {title, description}
    } = req;
    try {
        await Video.findOneAndUpdate({ _id:id }, {title, description});
        res.redirect(routes.videoDetail(id));
    } catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
};

export const deleteVideo = async (req, res) => {
    const{
        params : {id}
    } = req;
    try{
        await Video.findOneAndRemove({ _id: id });
    } catch(error){
    }
    res.redirect(routes.home);
};