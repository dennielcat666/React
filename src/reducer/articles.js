/* const { combineReducers } = require("redux"); */

import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, SUCCESS, START} from '../constants'
/* import {normalizedArticles as defaultArticles} from '../fixtures' */
import {arrToMap} from './utils'
import {Map, fromJS, Record} from 'immutable'
import { articles } from '../fixtures'


/* IMMUTABLEJS Record */
const ArticleRecord = Record({
	id: null,
	title: null,
	text: null,
	date: null,
	loading: false,
	comments: []
})			/* дефолтные значения */

const ReducerRecord = Record({
	entities: arrToMap([], ArticleRecord),  /* универсальное название для редусеров к которым обращаемся (в случае в articles - articles, comments - comments и т.д) */
	loading: false,
	loaded: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
	const { type, payload, response, randomId } = action

	switch (type) {
		case DELETE_ARTICLE:
			return state.deleteIn(['entities', payload.id])

		case ADD_COMMENT:
			/* IMMUTABLE JS */
			return state.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))

		case LOAD_ALL_ARTICLES + START:
			return state.set('loading', true)

		case LOAD_ALL_ARTICLES + SUCCESS:
			return state
				.set('entities', arrToMap(response, ArticleRecord))
				.set('loading', false)
				.set('loaded', true)
			/* return arrToMap(response, ArticleRecord) */

		case LOAD_ARTICLE + START:
			return state.setIn(['entities', payload.id, 'loading'], true)

		case LOAD_ARTICLE + SUCCESS:
			return state.setIn(['entities', payload.id], new ArticleRecord(response))



			/* ДО IMMUTABLE JS */
			/* const article = state[payload.articleId]
			return {...state, [payload.articleId]: {
				...article,
				comments: (article.comments || []).concat(randomId)
			}} */
	}

	return state
}



/* IMMUTABLEJS fromJS (глубоко иммутабельная структура (делает иммутабельным все, а не создает только одну обертку как Map)) */
/* const defaultState = fromJS(arrToMap(defaultArticles))

export default (state = defaultState, action) => {
	const { type, payload, randomId } = action

	switch (type) {
		case DELETE_ARTICLE:
			return state.delete(payload.id)

		case ADD_COMMENT:
			const article = state[payload.articleId]
			return {...state, [payload.articleId]: {
				...article,
				comments: (article.comments || []).concat(randomId)
			}}
	}

	return state
} */



/* IMMUTABLEJS Map (иммутабельная обертка) */
/* const defaultState = new Map(arrToMap(defaultArticles))

export default (state = defaultState, action) => {
	const { type, payload, randomId } = action

	switch (type) {
		case DELETE_ARTICLE:
			return state.delete(payload.id)

		case ADD_COMMENT:
			const article = state[payload.articleId]
			return {...state, [payload.articleId]: {
				...article,
				comments: (article.comments || []).concat(randomId)
			}}
	}

	return state
} */






/* ДО ПЕРЕПИСКИ НА IMMUTABLEJS */
/* export default (articles = arrToMap(defaultArticles), action) => {
	const { type, payload, randomId } = action

	switch (type) {
		case DELETE_ARTICLE:
			const articlesCopy = {...articles}
			delete articlesCopy[payload.id]
			return articlesCopy

		case ADD_COMMENT:
			const article = articles[payload.articleId]
			return {...articles, [payload.articleId]: {
				...article,
				comments: (article.comments || []).concat(randomId)
			}}
	}

	return articles
}
 */

/* export default (articles = defaultArticles, action) => { */
	/* const {type, payload} = action */		/* {type, payload, response, error} */

	/* switch (type) {
		case DELETE_ARTICLE:
			return articles.filter(article => article.id !== payload.id) */			/* новое состояние */
	/* }

	return articles
} */