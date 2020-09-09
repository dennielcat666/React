/* logger - console.log(); */


/* middleware - это функция которая принимает на вход store (весь редаксовый store),
которая возвращает функцию которая принимает аргумент next (т.е передать управление дальше, в следующую middleware'у.
если она последняя, то передать управление в reducer),
и она должна вернуть в свою очередь функцию которая примет action.
middleware вызывается на каждый action, все что будет происходить - будет проходить через цепочку middleware'ов */


export default store => next => action => {
	console.log('----', 'state before: ', store.getState());
	console.log('----', 'dispatching', action);
	next(action)
	console.log('----', 'state after: ', store.getState());
}