import { introduction } from './introduction.js'
import { virtualDom } from './virtualDom.js'

export const routes = {
    init(){
        routie({
            '': () => {
                virtualDom.init()
            },
            'principles': () => {
                console.log(v)
                introduction.init
            },
            'principles:id': () => {
                introduction.init
            }
        })
    }
}