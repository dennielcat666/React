import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const idSelector = (state, props) => props.id
export const commentsSelector = state => state.comments


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
	/* console.log('----', 'find comment', id); */
	return comments[id]
})


/* export const filtratedArticlesSelector = state => {
	const {selected, dateRange: {from, to}} = state.filters

	return state.articles.filter(article => {
		const published = Date.parse(article.date)
		return (!selected.length || selected.includes(article.id)) &&
			(!from || !to || (published > from && published < to))
	})
} */