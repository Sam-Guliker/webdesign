import { introduction } from './introduction.js'

export const routes = {
    init: (
        routie({
            '': () => {
                introduction.init
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