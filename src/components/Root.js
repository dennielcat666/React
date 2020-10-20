/* вынесено из App */

import React, {Component, PropTypes} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
/* import ArticleList from './ArticleList' */
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './Routes/CommentsPage'
/* для того что бы рендерить или не рендерить какой либо компонент
в зависимости от того что там за url, существует компонент Route */
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'
import Menu, {MenuItem} from './Menu'
import { propTypes } from 'react-addons-css-transition-group'


export default class Root extends Component {
	state = {
		username: ''
	}


	/* less8 помещение в контекст */
	static childContextTypes = {
		user: PropTypes.string
	}

	getChildContext() {
		return {
			user: this.state.username
		}
	}

	render() {
		/* const {articles} = this.props */		/* будем доставать из state (store?) */
		return (
			<div>
				<h2>Menu</h2>
				<Menu>
					<MenuItem link="counter" />
					<MenuItem link="articles" />
					<MenuItem link="filters" />
				</Menu>

				{/* добавили Menu и MenuItem */}
				{/* <div> */}
					{/* вместо <a href=""></a> - потому что плохо работает, используем компонент Link */}
					{/* <div><Link to="/counter">Counter</Link></div>
					<div><Link to="/articles">Articles</Link></div>
					<div><Link to="/filters">Filters</Link></div> */}

					{/* <div><NavLink to="/counter" activeStyle = {{color: 'red'}}>Counter</NavLink></div>
					<div><NavLink to="/articles" activeStyle = {{color: 'red'}}>Articles</NavLink></div>
					<div><NavLink to="/filters" activeStyle = {{color: 'red'}}>Filters</NavLink></div> */}
				{/* </div> */}
				<div>
					<h1>News App</h1>
					<UserForm value={this.state.username} onChange={this.handleUserChange} />
					<Switch>
						<Redirect from="/" exact to="/articles" />
						{/* <Counter /> */}
						<Route path="/counter" component={Counter} exact />
						{/* <Filters /> */}				{/* articles={[]} - не будет списка статей, т.к передаем пустой массив	 */}	
						<Route path="/filters" component={Filters} />
						<Route path="/articles/new" render={this.getArticleForm} />
						<Redirect path="/article" to="/articles" />
						{/* <ArticleList /> */}
						<Route path="/articles" component={ArticlesPage} />
						<Route path="/comments" component={CommentsPage} />
						<Route path="/error" render={() => <h1>Error</h1>} />
						{/* NotFoundPage помещается самым последним. * - все пути. Если роутер наткнется на
						один из путей что выше - он их покажет и дальше не пойдет, но если совпадений не будет
						он дойдет до * и покажет ее (для тех случаев когда указан несуществующий путь (Ошибка 404)) */}
						<Route path="*" component={NotFoundPage} />
					</Switch>
				</div>
			</div>										
		)
	}

	handleUserChange = (username) => this.setState({username})

	getArticleForm = () => <h2>New Article Form</h2>
}