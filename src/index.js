import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App'

const rootEl = document.getElementById('app')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , rootEl
)

if (module.hot) {
    console.log('Man\'s not hot')
    // Whenever a new version of App.js is available
    module.hot.accept('./components/App', function () {
        // Require the new version and render it instead
        var NextApp = require('./components/App')
        ReactDOM.render(
            <NextApp />,
            rootEl
        )
    })
}