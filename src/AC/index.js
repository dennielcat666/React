/* Action Creators */
import {INCREMENT, DELETE_ARTICLE} from '../constants'


export function increment() {
	return {
		type: INCREMENT
	}
}

export function deleteArticle(id) {
	return {
		type: DELETE_ARTICLE,
		payload: { id }			/* payload - доп парамметр. (принятое название payload, но можно как угодно) можно просто id без {} */
	}
}



/* export function increment() { */
	/* const action = { */		/* любой плоский js обьект */
		/* type: 'INCREMENT' */	/* УНИКАЛЬНО (типа ключ?) обязательное поле, которое дает понять что именно это за action, что бы разобраться, кто и как на него будет реагровать (используем в counter from reducer) */
	/* } */

	/* return action */
/* } */