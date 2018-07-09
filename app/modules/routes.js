import { introduction } from './introduction.js'
import { list } from './list.js'

export const routes = {
    init() {
        routie({
            '': () => {
                introduction.init()
            },
            'principles': () => {
                list.init()
            },
            'principles:id': () => {
                introduction.init
            }
        })
    }
}