/* вынесено из App */

import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'

export default class Root extends Component {
	render() {
		/* const {articles} = this.props */		/* будем доставать из state (store?) */
		return (
			<div>
				<h1>News App</h1>
				<UserForm />
				<Counter />
				<Filters articles={[]} />				{/* не будет списка статей, т.к передаем пустой массив	 */}	
				<ArticleList />
			</div>										
		)
	}
}