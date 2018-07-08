import { introduction } from './introduction.js'

export const routes = {
    init: (
        routie({
            '': () => {
                introduction.init
            }
        })
    )
}