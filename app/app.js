import { routes } from './modules/routes.js'

(function () {
    'use strict'

    const app = {
        init() {
            console.log('hallo?')
            routes.init()
        }
    }
    app.init()
})()