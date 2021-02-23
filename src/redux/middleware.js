import {CREATE_POST} from './types'
import {showAlert} from './actions'

const forbiddenWords = ['fuck', 'shit', 'php']

export function forbiddenWordsMiddleware({dispatch}){
    return function(next){
        return function (action){
            if (action.type === CREATE_POST){
                console.log('middle')
                const found = forbiddenWords.filter(w => action.payload.title.includes(w));
                if (found.length){return dispatch(showAlert('Это СПАМ!'))}
            }
            return next(action)
        }
    }
}