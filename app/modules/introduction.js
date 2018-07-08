import {data} from './data/data'
import {h} from 'virtual-dom/h'

export const introduction = {
    init: function(){
            return h('.greeting', ['Hello ' + data.name])
    }
}

