import React from 'react';
import { List } from './List';
import { Add} from './Add';
import { BrowserRouter as Router, Route } from "react-router-dom";

export function Admin()
{
    return (
        <Router>
            <Route exact path="/admin" component={List} />
            <Route path="/admin/list" component={List} />
            <Route path="/admin/add" component={Add} />
        </Router>
    )
}