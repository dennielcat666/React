import {createSelector} from 'reselect'


/* IMMUTABLEJS */
/* valueSeq - превратить обьект (ключ - значение) в просто список значений 
toArray - превращение в обычный JS массив */
export const articlesSelector = state => state.articles.entities.valueSeq().toArray()

/* ДО ПЕРЕПИСКИ НА IMMUTABLEJS */
/* export const articlesSelector = state => mapToArr(state.articles) */

export const filtersSelector = state => state.filters
export const idSelector = (state, props) => props.id
export const commentsSelector = state => state.comments.entities


/* createSelector создает мемоизированный селектор, который будет вызывать предыдущие селекторы,
которые передают первыми аргументами, а последний ан=ргумент передается функция, которая будет их комбенировать
в агрумент () этой функции будет прихлдить результат выполнения предыдущих селекторов (articles, filters) */

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
	console.log('----', 'recomputing filtrated articles');
	const {selected, dateRange: {from, to}} = filters

	return articles.filter(article => {
		const published = Date.parse(article.date)
		return (!selected.length || selected.includes(article.id)) &&
			(!from || !to || (published > from && published < to))
	})
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
	console.log('createCommentSelector', {comments:  comments.map(item => console.log({item})), id, comment:  comments.get(id)});

	return comments.get(id)
})


/* export const filtratedArticlesSelector = state => {
	const {selected, dateRange: {from, to}} = state.filters

	return state.articles.filter(article => {
		const published = Date.parse(article.date)
		return (!selected.length || selected.includes(article.id)) &&
			(!from || !to || (published > from && published < to))
	})
} */