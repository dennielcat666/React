import React, {Component} from 'react' 			/* {Component, PropTypes} */
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../AC'

import 'react-select/dist/react-select.css'
import { articlesSelector } from '../../selectors'

class SelectFilter extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	}

	/* в редусере */
	/* state = {
		selected: null
	} */

	/* handleSelectionChange = selected => this.setState({selected}) */
	handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

	render() {
		const { articles, selected } = this.props
		const options = articles.map(article => ({
			label: article.title,
			value: article.id
		}))

		return <Select 
			options={options}
			value={selected}
			onChange={this.handleChange}
			/* multi = {true}			опция в библиотеке 'react-select' - выбрать несклько */
			multi						/* если значение boolean (true/false) можно писать сокращенно */
		/>
	}
}

export default connect(state => ({
	selected: state.filters.selected,
	articles: articlesSelector(state)
}), {changeSelection})(SelectFilter)



/* export default connect(state => {
	console.log("state", state);
	return {
		selected: state.filters.selected,
		articles: state.articles
	}
}, {changeSelection})(SelectFilter) */

/* export default connect(state => ({
	selected: state.filters.selected,
	articles: state.articles
}), {changeSelection})(SelectFilter) */