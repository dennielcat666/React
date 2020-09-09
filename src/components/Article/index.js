/* раньше назывался Article */

import React, {Component, PureComponent} from 'react'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
/* import toggleOpen from '../decorators/toggleOpen' */
import {findDOMNode} from 'react-dom'			/* все что касается работы с реальным домом лежит в библтотеке 'react-dom' */
import CSSTransion from 'react-addons-css-transition-group'  /* анимация для css */
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC'

/* export default function Article(props) { */  /* функцияБ которая возвращает то, как выглядит компонент */
	/* const {article} = props */
	/* return( */
		/* <div> */
			/* <h3>{article.title}</h3> */
			/* <p>{article.text}</p> */
		/* </div> */
	/* ) */
/* } */

/* class Article extends Component { */
class Article extends PureComponent {		/* в PureComponent уже реализован shouldComponentUpdate с поверхностным сравнением props */
	// static propTypes = {
	// 	article: PropTypes.object.isRequired
	// }
	static PropTypes = {
		article: PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		}).isRequired,
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}


	/* выше добавлен PureComponent */
	/* shouldComponentUpdate(nextProps, nextState) {
		return this.props.isOpen !== nextProps.isOpen
	} */

	// ВЫНЕСЕНО В toggleOpen
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		isOpen: false
	// 	}
	// }
	
	render() {
		const {article, toggleOpen, deleteArticle} = this.props
		console.log('----', 'render article');
		/* const article = this.props.article; */
		// const body = this.state.isOpen && <p>{article.text}</p> 		ниже в return вызов {body}
		return(
			<div ref={this.setContainerRef}>
				<h3 onClick = {toggleOpen}>{article.title}</h3>

				{/* handleDelete был переписан в connect */}
				{/* <button onClick={this.handleDelete}>Delete Me</button> */}
				<button onClick={deleteArticle}>Delete Me</button>

				{/* {body}								{this.getBody()} вызов метода ниже */}
				<CSSTransion
					transitionName="article"
					transitionEnterTimeout={500}		/* не обязательно, но лучше указывать, что бы избежать багов */
					transitionLeaveTimeout={300}
					/* transitionAppearTimeout={500} */			/* для статьи, которая по умолчанию открыта (с анимацией) accordeon.js, style.css App.js */
					/* transitionAppear */						/* для статьи, которая по умолчанию открыта (с анимацией) accordeon.js, style.css App.js */
					component="section"			/* во что надо рендерить (по умолчанию span) */
				>
					{this.getBody()}
				</CSSTransion>
			</div>
		)
	}

	setContainerRef = (container) => {
		this.container = container
	}

	// ВЫНЕСЕНО В toggleOpen
	// handleClick = () => {
	// 	this.setState({
	// 		isOpen: !this.state.isOpen
	// 	})
	// }

	getBody() {
		return this.props.isOpen && (					/* было this.state.isOpen */
			<div>
				<p>{this.props.article.text}</p>
				<CommentList comments = {this.props.article.comments} ref={this.setCommentsRef} />
			</div>
		)
	}

	setCommentsRef = (commentsRef) => {
		this.commentsRef = commentsRef
		console.log('----', findDOMNode(commentsRef));		/* получим дом ноду в которой отрендерился CommentList */
	}


	/* переписано в connect (переписывать не обязательно, део вкуса, дучше оставлять handleDelete) */
	/* handleDelete = () => {
		this.props.deleteArticle(this.props.article.id)
	} */
}


/* переписано из handleDelete*/
export default connect(null, (dispatch, ownProps) => ({
	deleteArticle: () => dispatch(deleteArticle(ownProps.article.id))
}))(Article)


// export default toggleOpen(Article)
/* export default connect(null, {deleteArticle})(Article) */ 	/* toggleOpen передадим от родителя */