/* CommentForm */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentForm extends Component {
	static propTypes = {

	}

	/* пустые строки для юзера и комментария */
	state = {
        user: '',
        text: ''
	}
	
	render() {
        return (
			/* форма */
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
	}
	
	/* очистка формы при нажатии на кнопку */
	handleSubmit = ev => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        })
	}
	
	/* подсвечивать красным */
	getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
	}
	
}

/* ограничения */
const limits = {
    user: {
        min: 10,
        max: 20
    },
    text: {
        min: 30,
        max: 100
    }
}

export default CommentForm