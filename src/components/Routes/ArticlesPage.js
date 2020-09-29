import React, {Children, Component} from 'react'
/* import PropTypes from 'prop-types' */
import ArticleList from '../ArticleList'
/* import ArticlePage from './ArticlePage' */
import Article from '../Article'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
	static propTypes = {

	}

	render() {
		return (
			<div>
				<ArticleList path={this.props.match.path} />
				{/* <Route path="/articles/:id" component={ArticlePage} /> */}
				{/* <Route path="/articles/:id" render={this.getArticle} /> */}
				{/* path={`${this.props.match.path}/:id`} Если в Root поменяется путь, то можно будет не переписывать везде, где этот путь встречается */}
				{/* <Route path={`${this.props.match.path}/:id`} render={this.getArticle} /> */}
				<Route path={`${this.props.match.path}/:id`} children={this.getArticle} />
			</div>
		)
	}

	/* для варианта с Route render */
	getArticle = ({match}) => {
		if (!match) return <h2>Please select article</h2> /* для варианта с Route children */
		
		/* key={match.params.id} т.к в статьях state не перестраивается а обноваляется, то при открытии коментариев
		в одной статье, при переходе на другую - комменты тоже будут открыты
		что бы статья занова перестраивалась надо указать ключ (если поменялся id - убить уже
			существующий компонент статьи и создай новй) */
		return <Article id={match.params.id} isOpen key={match.params.id} />
	}
}

export default ArticlesPage