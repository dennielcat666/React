import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'
import {Route} from 'react-router-dom'

class ArticlePage extends Component {
	static propTypes = {

	}

	render() {
		/* console.log("MATCH", this.props.match);
		return <h1>Article sub-page {this.props.match.params.id}</h1> */
		return <Article id={this.props.match.params.id} isOpen />
	}
}

export default ArticlePage