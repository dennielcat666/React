import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import Loader from './Loader'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadArticleComments} from '../AC'


class CommentList extends Component {
	/* static defaultProps = {
		comments: []
	} */

	static defaultProps = {
		article: PropTypes.object.isRequired,
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}
	
	// ВЫНЕСЕНО В toggleOpen
	// state = {
	// 	isOpen: false
	// }

	componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
		/* старый пропс НЕ isOpen && новый isOpen && нужно ли загружать комментарии */
		/* console.log('componentWillReceiveProps', 'componentWillReceiveProps'); */
		if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
			console.log('componentWillReceiveProps', article.id);
			loadArticleComments(article.id)
		}
	}

/* 	componentWillMount() {
		console.log('----', 'mounting comment list');
	}

	componentDidMount() {
		console.log('----', 'mounted');
	} */

	render() {
		const {isOpen, toggleOpen} = this.props
		const text = isOpen ? 'Hide comments' : 'Show comments'
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
		const { article: {comments, id, commentsLoading, commentsLoaded}, isOpen } = this.props
		if (!isOpen) return null
		if (commentsLoading) return <Loader />
		if (!commentsLoaded) return null

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

export default connect(null, { loadArticleComments })(toggleOpen(CommentList))