import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS} from '../constants'
/* import {normalizedComments} from '../fixtures' */
import {arrToMap} from './utils'
import {OrderedMap, Record} from 'immutable'


const CommentRecord = Record({
	id: null,
	text: null,
	user: null
})

const ReducerState = Record({
	entities: new OrderedMap({})
	/* pagination: new Map({}),
	total: null */
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
			return state.mergeIn(['entities'], arrToMap(response.records, CommentRecord))
			/* break; */
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