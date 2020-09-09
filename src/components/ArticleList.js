import React, {Component} from 'react'
import Article from './Article'				/* теперь путь обозначает папку */
import accordeon from '../decorators/accordeon'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'


// ПЕРВАЯ ВЕРСИЯ ДЛЯ ТОГО ЧТО БЫ СТАТЬИ ОТКРЫВАЛИСЬ ОЧЕРЕДНО
// function ArticleList(props) {
// 	const articleElements = props.articles.map(article => <li key={article.id}><Article article={article}/></li>)		/* article (переменная/свойство пропса) => <li key={article(переменная/свойство пропса).id}><Article article(пропс)={article(переменная/свойство пропса)}/></li> */
// 	return (																										/* props.articles.map - типа цикла for */
// 		<ul>
// 			{articleElements}
// 		</ul>
// 	)
// }



// ВТОРАЯ ВЕРСИЯ ДЛЯ ТОГО ЧТО БЫ СТАТЬИ ОТКРЫВАЛИСЬ КАК АККОРДЕОН (ОДНА ОТКРЫЛАСЬ - ВТОРАЯ ЗАГРЫЛАСЬ)
class ArticleList extends Component {
	static PropTypes = {
		articles: PropTypes.array.isRequired,
		openItemId: PropTypes.string,
		toggleOpenItem: PropTypes.func.isRequired
	}

	/* ВЫНЕСЕНО В accordeon (openItemId) */
	/* state = { */
		/* openArticleId: null  */	/* изначально все статьи закрыты */
	/* } */

	render() {
		console.log('----', 'rendering article list');
		const {openItemId, toggleOpenItem, articles} = this.props
		const articleElements = articles.map(article => (
			<li key={article.id}>
				<Article
					article={article}
					isOpen={article.id === openItemId}

					/* для упрщенного варианта */
					toggleOpen={toggleOpenItem(article.id)}


					/* для ванианта с карированием */
					// toggleOpen={this.toggleOpenArticle(article.id)}			/* функция ниже */
				/>
			</li>
		))
		return (
			<ul>
				{articleElements}
			</ul>
		)
	}

	/* ВЫНЕСЕНО В accordeon (toggleOpenItem)*/
	/* упрощенный вариант (?) */
	/* toggleOpenArticle(openArticleId) {
		this.setState({ openArticleId })
	} */


	// вариант с карированием
	// toggleOpenArticle = (openArticleId) => () => {			/* карирование - запомнить переменную в замыкании, а возвращает функцию, которая будет передаваться в toggleOpen */
		// this.setState({openArticleId})
	// }
}



export default connect(state => {
	console.log('----', 'connect');
	return {
		articles: filtratedArticlesSelector(state)
	}
})(accordeon(ArticleList))




/* export default connect(state => ({
	articles: state.articles
}))(accordeon(ArticleList)) */