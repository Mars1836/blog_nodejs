import express from "express";
var router = express.Router();
import { news} from "../app/controllers/news.controller.js"


router.use("/show",news.show);
router.use("/",news.index);
export default router;