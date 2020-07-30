import React from 'react'
import {render} from 'react-dom'
import App from './App'
/* import {articles} from './fixtures' */ /* ниже вызывается */

// render(<h1>Hellow</h1>, document.getElementById('container'))
/* render(<App articles={articles} />, document.getElementById('container')) */ 
render(<App />, document.getElementById('container'))	/* articles={articles} в reducer'e */