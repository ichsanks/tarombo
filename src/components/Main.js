import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Page from './pages/Page'
import Post from './pages/Post'

const Main = () => (        
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/page' component={Page} />
        <Route path='/post' component={Post} />
    </Switch>
)

export default Main