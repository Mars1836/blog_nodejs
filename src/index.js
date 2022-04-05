import express from "express";
import morgan from "morgan";
import { engine } from 'express-handlebars';
import path, { dirname } from "path";
import {fileURLToPath} from "url";
import {route} from "./routes/index.js"
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static(path.join(__dirname,"public")));
app.use(morgan("combined"));
app.engine('hbs', engine({extname:".hbs"}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,"resource/views"));
route(app);
app.listen(port,()=>{console.log("server is running")});