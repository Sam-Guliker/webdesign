const { hyper } = hyperHTML

import app from './navigate-app.js'
import Introduction from './introduction.js'
import Principles from './list.js'

const page = {
    introduction: new Introduction,
    principles: new Principles
};

export const routes = {
    init() {
        app.get('https://sam-guliker.github.io/webdesign/app/index.html', () => hyper(document.body) `${page.introduction}`);
        app.get('/principles', () => hyper(document.body) `${page.principles}`);
        app.navigate('https://sam-guliker.github.io/webdesign/app/index.html');
    }
}