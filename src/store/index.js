/* STORE */

import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())	/* функция которая принимает один ОБЯЗАТЕЛЬНЫЙ аргумент (всего 3) это Reducer (управляет состоянием) (длинное для настроки расширения redux devtools)*/
window.store = store	/* не обязательно но удобно для дебага */

export default store