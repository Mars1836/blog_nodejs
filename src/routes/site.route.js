import express from 'express';
import { site } from '../app/controllers/site.controller.js';

let siteRouter = express.Router();
    siteRouter.use('/search', site.search);
        siteRouter.use('/', site.index);
export default siteRouter;
