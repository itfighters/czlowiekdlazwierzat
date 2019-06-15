import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
                <Route path='/tiles' component={Tiles} />
            </Router>
            <Loader visible={true} />
        </div>
    );
}

export default App;
