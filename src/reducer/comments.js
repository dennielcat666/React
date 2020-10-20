import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS} from '../constants'
/* import {normalizedComments} from '../fixtures' */
import {arrToMap} from './utils'
import {OrderedMap, Record, Map} from 'immutable'


const CommentRecord = Record({
	id: null,
	text: null,
	user: null
})

const ReducerState = Record({
	entities: new OrderedMap({}),
	pagination: new Map({}),
	total: null
})

export default (state = new ReducerState(), action) => {
	const {type, payload, response, randomId } = action
	console.log("response!!!!!!!!!!!!!!!!!!!!", response, type);

	switch (type) {
		case ADD_COMMENT:
			return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

		case LOAD_ARTICLE_COMMENTS + SUCCESS:
			// const foo = arrToMap(response, CommentRecord);
			console.log({response});
			return state.mergeIn(['entities'], arrToMap(response, CommentRecord))
			/* break; */

		case LOAD_COMMENTS_FOR_PAGE + START:
			return state.setIn(['pagination', payload.page, 'loading'], true)

		case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
			return state
				.set('total', response.total)
				.mergeIn(['entities'], arrToMap(response.records, CommentRecord))
				.setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id))
				.setIn(['pagination', payload.page, 'loading'], false)
	}

	return state
}

/* до immutable js (до less6) */
/* export default (state = arrToMap(normalizedComments), action) => {
	const { type, payload, randomId } = action

	switch (type) {
		case ADD_COMMENT:
			return {...state, [randomId]: {
				...payload.comment,
				id: randomId
			}}
	}
	return state
} */


/* const defaultComments = normalizedComments.reduce((acc, comment) => ({
	...acc,
	[comment.id]: comment
}), {})

export default (state = defaultComments, action) => {
	const { type, payload, response, error } = action
	switch (type) {

	}

	return state
} */