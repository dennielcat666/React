/* REDUCER */

/* собираем более мелкие redusers (counterReducer) в один крупный,
который будет управлять сразу всем состоянием, всем store'ом */


import {combineReducers} from 'redux'	/* для объединения reducers в один */
import {routerReducer as router} from 'react-router-redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import filters from './filters'


export default combineReducers({		/* передаем структуру. ключи это то, как будут в store храниться данные */
	counter: counterReducer,				/* значение counter (ключ?) это reducer который отвечает за это значение (counterReducer) */
	articles,							/* более простая запись */
	comments,
	filters,
	router
	
})