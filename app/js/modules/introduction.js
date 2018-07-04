const h = require('virtual-dom/h');
import {data} from './data/data.js'


export const introduction = {
    init(){
        return h('.greeting', ['Hello ' + data.name])
    }
}

