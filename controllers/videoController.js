//if you give the name of the template file as an argument to the render() function,
//this function will show after finding the template file with the file name home makeover pug in the folder
export const home = (req, res) => res.render("home", {pageTitle: 'Home'}); 
export const search = (req, res) => res.render("search", {pageTitle: 'Search'});
export const upload = (req, res) => res.render("upload", {pageTitle: 'Upload'});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: 'Video Detail'});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: 'Edit Video'});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: 'Delete Video'});