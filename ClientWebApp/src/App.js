import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SingUp from "./views/singUp";

import Home from './views/home';
import Notifications from './views/notifications';
import Loader from './components/loader'
import Header from './components/header';
import Details from "./views/details";
import Tiles from './views/tiles';
function App() {
    return (
        <div>
            <Router>
                <Header></Header>
                <Route exact path="/" component={Home} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/details" component={Details} />
            	<Route path="/singUp" component={SingUp} />
                <Route path='/tiles' component={Tiles} />
            </Router>
        </div>
    );
}

export default App;
