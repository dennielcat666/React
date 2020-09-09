/* STORE */

import {createStore, compose, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/loggr'

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

	}) : compose

const enhancer = composeEnhancers(applyMiddleware(logger))

const store = createStore(reducer, enhancer)

/* const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) */	/* функция которая принимает один ОБЯЗАТЕЛЬНЫЙ аргумент (всего 3) это Reducer (управляет состоянием) (длинное для настроки расширения redux devtools)*/
window.store = store	/* не обязательно но удобно для дебага */

export default store