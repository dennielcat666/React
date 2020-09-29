/* вынесено из App */

import React, {Component} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
/* import ArticleList from './ArticleList' */
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
/* для того что бы рендерить или не рендерить какой либо компонент
в зависимости от того что там за url, существует компонент Route */
import {Route, Link, Switch} from 'react-router-dom'

export default class Root extends Component {
	render() {
		/* const {articles} = this.props */		/* будем доставать из state (store?) */
		return (
			<div>
				<h2>Menu</h2>
				<div>
					{/* вместо <a href=""></a> - потому что плохо работает, используем компонент Link */}
					<div><Link to="/counter">Counter</Link></div>
					<div><Link to="/articles">Articles</Link></div>
					<div><Link to="/filters">Filters</Link></div>
				</div>
				<div>
					<h1>News App</h1>
					<UserForm />
					<Switch>
						{/* <Counter /> */}
						<Route path="/counter" component={Counter} exact />
						{/* <Filters /> */}				{/* articles={[]} - не будет списка статей, т.к передаем пустой массив	 */}	
						<Route path="/filters" component={Filters} />
						<Route path="/articles/new" render={this.getArticleForm} />
						{/* <ArticleList /> */}
						<Route path="/articles" component={ArticlesPage} />
					</Switch>
				</div>
			</div>										
		)
	}

	getArticleForm = () => <h2>New Article Form</h2>
}