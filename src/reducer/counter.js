/* часть store для более удобного написание 
было например:
{
	counter: 9,
	articles: [...],
	user: {...}
}
что бы было проще управлять (написание более мелких функций (reducerы)),
мы разбиваем это на отдельные более мелкие store'ы */

import {INCREMENT} from '../constants'


/* т.к нет дефолтного значения state, то назначаем его в передаваеммых данных */
export default (state = 0, action) => {
	const {type} = action
	switch (type) {			/* если много action надо делать switch case */
		case INCREMENT:
			return state + 1
	}

	return state

	/* return action.type == INCREMENT ? state + 1 : state */
}