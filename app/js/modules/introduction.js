const h = require('virtual-dom/h');
import {data} from './data/data.jsc'


export const introduction = {
    init(){
        return h('.greeting', ['Hello ' + data.name])
    }
}

