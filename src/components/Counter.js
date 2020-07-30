import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'		/* для связи компонента и стора! connect - фабрика декораторов */
import {increment} from '../AC'

class Counter extends Component {
	static propTypes = {

	}

	render() {
		return (
			<div>
				<h1>
					{this.props.count}		{/* будем получать само число */}
					<button onClick = {this.handleIncrement}>Increment</button>
				</h1>
			</div>
		)
	}

	handleIncrement = () => {
		const action = increment()			/* {increment} from '../AC' */
		this.props.dispatch(action)			/* отправление в reducer, а точнее во все */
	}
}

export default connect(state => {		/* получение состояния store (двнные из store) и передает их в props в компонент */
	return {					/* вернет то, какие пропсы нужно передать в этот компонент, в дополнении к тому, что ему может еще приходить сверху */
		count: state.counter
	}
})(Counter)	/* connect() - функция, которая вернет декоратор */