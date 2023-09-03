import UrlParser from '../routes/url-parser';
import route from '../routes/route';

export default class App {
    constructor(app = document.getElementById('app')) {
        this.app = app;
    }

    async render() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const components = route[url];

        this.app.innerHTML = '';
        await Promise.all(components.map(async (component) => {
            this.app.innerHTML += component.content();
            await component.postRender();
        }));
    }
}
