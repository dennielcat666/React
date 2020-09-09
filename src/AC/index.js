/* Action Creators */
import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, CLEAR_DATE_RANGE } from '../constants'


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

export function changeDateRange(dateRange) {
	console.log("changeDateRange", dateRange);
	return {
		type: CHANGE_DATE_RANGE,
		payload: { dateRange }
	}
}


/* для отдельного экшена */
/* export function clearDateRange() {
	return {
		type: CLEAR_DATE_RANGE
	}
} */

export function changeSelection(selected) {
	return {
		type: CHANGE_SELECTION,
		payload: { selected }
	}
}



/* export function increment() { */
	/* const action = { */		/* любой плоский js обьект */
		/* type: 'INCREMENT' */	/* УНИКАЛЬНО (типа ключ?) обязательное поле, которое дает понять что именно это за action, что бы разобраться, кто и как на него будет реагровать (используем в counter from reducer) */
	/* } */

	/* return action */
/* } */