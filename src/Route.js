import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Info from './components/info/Info'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'

const Routing = () => (

    <Router>
        <Switch>
            <Route exact path = "/" component={AboutMe}/>
            <Route path = "/projects" component={Projects}/>
            <Route path = "/info" component= {Info}/>
        </Switch>
    </Router>
);
  export default Routing;
