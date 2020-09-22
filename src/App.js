import React, {Component} from 'react'
import Root from './components/Root'
import {Provider} from 'react-redux' /* для работы с компонентом connect */
import {HashRouter as Router} from 'react-router-dom'
import store from './store'

export default class App extends Component {
	render() {
		return (
			<Provider store = {store}>
				<Router>
					<Root />
				</Router>
			</Provider>
		)
	}
}







{/* ВЫНЕСЕНО В Root */}
{/* import React, {Component} from 'react'
import ArticleList from './components/ArticleList' */}
{/* import ArticleChart from './components/ArticleChart' */}	{/* Выглядит как обычный компонент */}
{/* import UserForm from './components/UserForm'
import Filters from './components/Filters'
import Counter from './components/Counter' */}
{/* import {Provider} from 'react-redux' */}	{/* для работы с компонентом connect */}
{/* import store from './store' */}

{/* export default class App extends Component { */}
	{/* render() {
		const {articles} = this.props
		return ( 	
			<Provider store = {store}>
				<div>
					<h1>News App</h1>
					<UserForm />
					<Counter />
					<Filters articles={articles} /> */}
					{/* см. след. строку (продолжение) defaultOpenId={articles[0].id} - 
					первыя статья по умолчанию открыта (но без анимации (style.css что бы не забыть)) 
					accordeon.js style.css index.js (быв. Article) */}
					{/* <ArticleList articles = {articles} />
					<ArticleChart articles = {articles} />
				</div>	
			</Provider>											
		)
	}

} */}






{/* export default function App(props) { */}
	{/* const options = props.articles.map(article => ({
		label: article.title,
		value: article.id
	})) */}
	{/* возвращать можно лишь 1 компонент (обертку/контейнер)
	return ( 							 */}
		{/* <div>
			<h1>News App</h1>
			<UserForm />
			<Select options = {options} />  */}
			{/* можно писать свои компненты, но перед этим импорт сделать */}
			{/* <ArticleList articles = {props.articles} />
			<ArticleChart articles = {props.articles} />
		</div>												
	)
} */}