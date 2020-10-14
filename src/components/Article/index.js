/* раньше назывался Article */

import React, {Component, PureComponent} from 'react'
import CommentList from '../CommentList'
import Loader from '../Loader'
import PropTypes from 'prop-types'
/* import toggleOpen from '../decorators/toggleOpen' */
import {findDOMNode} from 'react-dom'			/* все что касается работы с реальным домом лежит в библтотеке 'react-dom' */
import CSSTransion from 'react-addons-css-transition-group'  /* анимация для css */
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle, loadArticleById} from '../../AC'

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
		id: PropTypes.string.isRequired,
		article: PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		}),
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}

	/* убрано на less7 */
	/* componentWillReceiveProps(nextProps) - вызывается каждый раз при обновлении (обновлении страницы)
	не не при первом монтировании */
	/* componentWillReceiveProps(nextProps) { */
		/* если следующий пропс => открыт И настоящий пропс НЕ ровняется открытому (т.е закрыт) */
		/* if (nextProps.isOpen && !this.props.isOpen) nextProps.loadArticle() */
		/* if (nextProps.isOpen) nextProps.loadArticle()
	} */


	/* для корректного открытия статей. componentDidMount - вызывается один раз при монтировании компонента */
	componentDidMount() {
		const {isOpen, loadArticle} = this.props
		if (isOpen) loadArticle()
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
		if (!article) return null
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
		console.log('----', container);
		this.container = container
	}

	/* componentDidUpdate() {
		console.log('', this.container.getBoundingClientReact());
	} */

	// ВЫНЕСЕНО В toggleOpen
	// handleClick = () => {
	// 	this.setState({
	// 		isOpen: !this.state.isOpen
	// 	})
	// }

	getBody() {
		const {article, isOpen} = this.props
		if (!isOpen) return null

		if (article.loading) return <Loader/>

		return (					/* было this.state.isOpen .. после еще было this.props.isOpen && */
			<div>
				<p>{this.props.article.text}</p>
				 {/* <CommentList comments = {this.props.article.comments} ref={this.setCommentsRef} /> */}
				<CommentList article = {this.props.article} ref={this.setCommentsRef} />
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
export default connect((state, props) => ({
	article: state.articles.entities.get(props.id)
}), (dispatch, ownProps) => ({
	deleteArticle: () => dispatch(deleteArticle(ownProps.id)),
	loadArticle: () => dispatch(loadArticleById(ownProps.id))
}))(Article)


/* export default connect((state, props) => {
	console.log("STATE ARTICLE", state);
	console.log("PROPS ARTICLE", props.id);
	console.log("ENTITIES ARTICLE", state.articles.entities.get(props.id));
	return {
		article: state.articles.entities.get(props.id)
	}
}, (dispatch, ownProps) => ({
	deleteArticle: () => dispatch(deleteArticle(ownProps.id)),
	loadArticle: () => dispatch(loadArticleById(ownProps.id))
}))(Article) */

// export default toggleOpen(Article)
/* export default connect(null, {deleteArticle})(Article) */ 	/* toggleOpen передадим от родителя */