import React, {Component, PropTypes} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	}

	state = {
		selected: null
	}

	handleSelectionChange = selected => this.setState({selected})

	render() {
		const {articles} = this.props
		const options = articles.map(article => ({
			label: article.title,
			value: article.id
		}))

		return <Select 
			options={options}
			value={this.state.selected}
			onChange={this.handleSelectionChange}
			/* multi = {true}			опция в библиотеке 'react-select' - выбрать несклько */
			multi						/* если значение boolean (true/false) можно писать сокращенно */
		/>
	}
}

export default SelectFilter