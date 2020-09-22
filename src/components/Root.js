/* вынесено из App */

import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
/* для того что бы рендерить или не рендерить какой либо компонент
в зависимости от того что там за url, существует компонент Route */
import {Route} from 'react-router-dom'

export default class Root extends Component {
	render() {
		/* const {articles} = this.props */		/* будем доставать из state (store?) */
		return (
			<div>
				<h1>News App</h1>
				<UserForm />
				{/* <Counter /> */}
				<Route path="/counter" component={Counter} />
				{/* <Filters /> */}				{/* articles={[]} - не будет списка статей, т.к передаем пустой массив	 */}	
				<Route path="/filters" component={Filters} />
				{/* <ArticleList /> */}
				<Route path="/articles" component={ArticleList} />
			</div>										
		)
	}
}