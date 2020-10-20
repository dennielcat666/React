/* Action Creators */
import {
	INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, CLEAR_DATE_RANGE, ADD_COMMENT, LOAD_ALL_ARTICLES, 
	LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS, FAIL
} from '../constants'
/* import callAPI from '../middlewares/callAPI'; */
import {push} from 'react-router-redux'


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

export function addComment(comment, articleId) {
	return {
		type: ADD_COMMENT,
		payload: { comment, articleId },
		generateId: true
	}
}


export function loadAllArticles() {
	return {
		type: LOAD_ALL_ARTICLES,
		callAPI: '/api/article'
	}
}

export function loadArticleComments(articleId) {
	/* console.log("articleId!!!!!!!!!!!!!!", articleId) */
	return {
		type: LOAD_ARTICLE_COMMENTS,
		payload: { articleId },
		callAPI: `/api/comment?article=${articleId}`
	}
}

/* возвращаем функцию, в которой есть достум к методу dispatch, при помощи thunk
асинхранная логика, которая будет выполняться в middleware, но писать ее можно в AC */
export function loadArticleById(id) {
	return (dispatch, getState) => {
		const article = getState().articles.entities.get(id)
		if (article && article.text) return

		dispatch({
			type: LOAD_ARTICLE + START,
			payload: {id}
		})

		/* имитация долгого API  */
		setTimeout(() => {
			fetch(`/api/article/${id}`)
				.then(res => {
					if (res.status >= 400) throw new Error(res.statusText)
					return res.json()
				})
				.then(response => dispatch({
					type: LOAD_ARTICLE + SUCCESS,
					payload: {id},
					response
				}))
				.catch(error => {
					dispatch(push('/error'))

					dispatch({
						type: LOAD_ARTICLE + FAIL,
						payload: {id},
						error
					})
				})
		}, 1000)
	}
}

export function checkAndLoadCommentsForPage(page) {
    return (dispatch, getState) => {
        const {comments: {pagination}} = getState()
        if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return

        dispatch({
            type: LOAD_COMMENTS_FOR_PAGE,
            payload: { page },
            callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
        })
    }
}



/* вместо плоского обьекта будем возвращать функцию, в которой есть достум к методу dispatch, при помощи thunk */
/* export function loadArticleById(id) {
	return {
		type: LOAD_ARTICLE,
		callAPI: `/api/article/${id}`
	}
} */


/* export function increment() { */
	/* const action = { */		/* любой плоский js обьект */
		/* type: 'INCREMENT' */	/* УНИКАЛЬНО (типа ключ?) обязательное поле, которое дает понять что именно это за action, что бы разобраться, кто и как на него будет реагровать (используем в counter from reducer) */
	/* } */

	/* return action */
/* } */