class Site{
    index(req,res){
        res.render("home");
    }
    search(req,res){
        res.render("search");
    }
}
export const site = new Site;