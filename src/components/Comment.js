import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createCommentSelector} from '../selectors'


function Comment({comment}) {
	return (
		<div>
			{comment.text} <b>by {comment.user}</b>
		</div>
	)
}

Comment.propTypes = {
	comment: PropTypes.shape({
		text: PropTypes.string.isRequired,
		user: PropTypes.string
	}).isRequired
}


/* доп обертка для connect (вынесено из connect) 
для инициализации компонента нужно будет отдельно вызывать эту функцию
(при инициализации нового коммента) */
const createMapStateToProps = () => {
	const commentSelector = createCommentSelector()

	return (state, ownProps) => ({
		comment: commentSelector(state, ownProps)
	})
}

export default connect(createMapStateToProps)(Comment)