import { introduction } from './introduction.js'
import { tryingOut } from '../vendors/virtualDom.js'

export const routes = {
    init: (
        routie({
            '': () => {
                virtualDom.init
            },
            'principles': () => {
                introduction.init
            },
            'principles:id': () => {
                introduction.init
            }
        })
    )
}