import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
	static contextTypes = {
		store: PropTypes.object,
		router: PropTypes.object,
		user: PropTypes.string
	}

	render() {
		console.log('CONTEXT', this.context);
		return (
			<div>
				<h2>User: {this.context.user}</h2>
				<h3>Menu:</h3>
				<div>
					{/* для компонента который должен придти между
					открывающимся и закрывающимся тегом, есть специальное
					место this.props.children */}
					{this.props.children}
				</div>
			</div>
		)
	}
}

export {MenuItem}
export default Menu