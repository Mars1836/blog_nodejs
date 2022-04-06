import newsRouter from './news.route.js';
import siteRouter from './site.route.js';
export function route(app) {
    app.use('/', siteRouter);

    app.use('/news', newsRouter);
}
