/* STORE */

import {createStore, compose, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import callAPI from '../middlewares/callAPI'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

	}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk, randomId, callAPI, routerMiddleware(history), logger))

const store = createStore(reducer, enhancer)

/* const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) */	/* функция которая принимает один ОБЯЗАТЕЛЬНЫЙ аргумент (всего 3) это Reducer (управляет состоянием) (длинное для настроки расширения redux devtools)*/
window.store = store	/* не обязательно но удобно для дебага */

export default store