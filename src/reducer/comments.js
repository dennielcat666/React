import {ADD_COMMENT} from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'


export default (state = arrToMap(normalizedComments), action) => {
	const { type, payload, randomId } = action

	switch (type) {
		case ADD_COMMENT:
			return {...state, [randomId]: {
				...payload.comment,
				id: randomId
			}}
	}
	return state
}


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