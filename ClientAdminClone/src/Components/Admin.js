import React from 'react';
import { List } from './Auctions/List';
import { Add} from './Auctions/Add';
import { Edit } from './Auctions/Edit';

import { BrowserRouter as Router, Route } from "react-router-dom";

export function Admin()
{
    return (
        <Router>
            <Route exact path="/admin" component={List} />
            <Route path="/admin/list" component={List} />
            <Route path="/admin/add" component={Add} />
            <Route path="/admin/edit/:id" component= {Edit}/>
        </Router>
    )
}