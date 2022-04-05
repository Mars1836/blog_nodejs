 class News{
    // /news route
    index(req,res){
        res.render("news");
    }
    show(req,res){
        res.send("views/show");
    }
}
export const news = new News;

