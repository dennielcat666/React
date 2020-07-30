// decorator === HOC === Higher Order Component

import React from 'react'

export default (OriginalComponent) => class ToggleOpenDecorator extends React.Component {
	state = {
		isOpen: false
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return <OriginalComponent {...this.props} /* isOpen = {this.state.isOpen} */ {...this.state} toggleOpen = {this.toggleOpen} />
	}
}