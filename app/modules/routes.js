import { introduction } from './introduction.js'
import { virtualDom } from './virtualDom.jsx'

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