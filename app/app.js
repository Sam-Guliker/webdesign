import { routes } from './modules/routes.js'

(function () {
    'use strict'

    const app = {
        init() {
            routes.init()
        }
    }
    app.init()
})()