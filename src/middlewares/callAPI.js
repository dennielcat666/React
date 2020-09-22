import {START, SUCCESS, FAIL} from '../constants'

export default store => next => action => {
	const {callAPI, type, ...rest} = action
	/* const {callAPI} = action */

	/* ...rest - что бы исчез callAPI из результирующего action (не обязательно)
 */

	/* в middleware (сюда) приходит экшен, 
	проверяем, есть ли в нем строка callAPI.
	если есть, то значит это нужный нам экшен,
	по которому мы будем обращаьбся к серверу */
	if (!callAPI) return next(action)

	/* передача action в reducer, что бы там повесился loader,
	но меняем тип */
	next({
		...rest,
		type: type + START
	})

/* имитация долгого API */
	setTimeout(() => fetch(callAPI)		/* обращение к серверу, превращаем все в обычный js обьект */
		.then(res => res.json())
		/* если все хорошо то диспатчим новый экшен (передаем управление дальше, с новым экшеном) */
		.then(response => {console.log({callAPI, response}); return next({...rest, type: type + SUCCESS, response})})
		/* если запрос не прошел, то диспатчим error,  и передаем управление дальше с типом LOAD_ALL_ARTICLES_FAIL
		(type: type + FAIL) и в будущем этот error как то показать*/
		.catch(error => {console.log({callAPI, error}); return next({...rest, type: type + FAIL, error})})
	, 1000)




/* 	fetch(callAPI)
		.then(res => res.json())
		.then(response => next({...rest, response})) */

		/* без ...rest */
		/* .then(response => next({...action, response})) */
}