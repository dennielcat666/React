import React, {Component} from 'react'

export default Component => class Accordeon extends React.Component {
	
	/* openItemId - id открытого аккордеона */
	state = {
		openItemId: null

		/* ситуация если статья изначально открыта (но без анимации (style.css что бы не забыть)) index.js (быв. Article) style.css App.js */
		/* openItemId: props.defaultOpenId */

	}

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		openItemId: null
	// 	}
	// }

	render() {
		// console.log('state', this.state.openItemId);
		/* до мемоизации */
		/* return <Component {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId} /> */
		return <Component {...this.props} toggleOpenItem = {this.toggleOpenItemMemoized} openItemId = {this.state.openItemId} />
	}


	/* если статья открыта, то ее id уже сохранен в state */
	toggleOpenItem = openItemId => () => {
		this.setState({
			openItemId: openItemId === this.state.openItemId ? null : openItemId
		})
	}

	/* для того что бы PureComponent корректно работал. т.к после каждого обновления создается новая функция (toggleOpenItem) */
	/* мемоизация/кеширование функции (toggleOpenItem) в Map() */ 
	toggleOpenItemMemoized = (openItemId) => {
		/* если функция есть, то будет возвращаться прошлая ее ссылка (мемоизированная)*/
		if (this.memoizedTogglers.get(openItemId)) return this.memoizedTogglers.get(openItemId)
		/* если функции нет, то будет создаваться новая*/
		const toggler = this.toggleOpenItem(openItemId)
		this.memoizedTogglers.set(openItemId, toggler)
		return toggler
	}

	memoizedTogglers = new Map()
}