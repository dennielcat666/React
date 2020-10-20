import React, {Component} from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
	static propTypes = {

	}

	/* в мире react хорошей практикой считается возможность контролировать все,
	что бы не было каких-либо скрытых или неявных состояний
	если у нас есть форма, значит для чего то мы ее сделали, значит нужно где-то в мине react
	хранить состояние этой формы, а не где- то в реальном DOM'е
	значитт нужно создать state */

	/* state = {
		username: ''
	} */

	render() {
		return (
			<div>
				<label>Username: </label>
				<input type="text" value={this.props.value}/* {this.state.username} (убрано в less8) */ onChange={this.handleChange} />
			</div>
		)
	}

	handleChange = ev => {
		/* if (ev.target.value.length > 15) return */ 		/* ограничили input 15'ю символами */
		
		/* убрано в less8 */
		/* if (ev.target.value.length > 15) return this.setState({
			username: ''
		}) */

		this.props.onChange(ev.target.value)

		/* убрано в less8 */
		/* this.setState({
			username: ev.target.value
		}) */
	}
}

export default UserForm