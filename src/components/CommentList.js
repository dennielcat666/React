import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'

class CommentList extends Component {
	static defaultProps = {
		comments: []
	}
	
	// ВЫНЕСЕНО В toggleOpen
	// state = {
	// 	isOpen: false
	// }

	componentWillMount() {
		console.log('----', 'mounting comment list');
	}

	componentDidMount() {
		console.log('----', 'mounted');
	}

	render() {
		const {isOpen, toggleOpen} = this.props
		const text = isOpen ? 'Hide' : 'Show'
		return (
			<div>
				<button onClick={toggleOpen}>{text}</button>
				{this.getBody()}
			</div>
		)

		// const {comment} = this.props
		// const commentBody = this.state.isOpen && <Comment comment={comment}/>
		// 	<div>
		// 		<button onClick = {this.handleClick}>{this.state.isOpen ? "Hide" : "Open"}</button>
		// 		{commentBody}
		// 	</div>
		// )
	}

	// handleClick = () => {
	// 	this.setState({
	// 		isOpen: !this.state.isOpen
	// 	})
	// }

	// ВЫНЕСЕНО В toggleOpen
	// toggleOpen = () => this.setState({
	// 	isOpen: !this.state.isOpen
	// })

	getBody() {
		const { article: {id, comments = []}, isOpen } = this.props
		if (!isOpen) return null

		const body = comments.length ? (
			<ul>
				{comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
			</ul>
		) : <h3>No comments yet</h3>

		return (
			<div>
                {body}
                <CommentForm articleId = {id} />
            </div>
		)
	}
}

export default toggleOpen(CommentList)