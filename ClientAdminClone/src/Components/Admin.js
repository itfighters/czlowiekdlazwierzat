import React from "react";
import { List } from "./Auctions/List";
import { Add } from "./Auctions/Add";
import { Edit } from "./Auctions/Edit";
import Categories from "./Categories";
import EditDetails from "./Categories/EditDetails";
import AddCategory from "./Categories/Add";

import { BrowserRouter as Router, Route } from "react-router-dom";

export function Admin() {
  return (
    <Router>
      <Route exact path="/admin" component={List} />
      <Route path="/admin/list" component={List} />
      <Route path="/admin/add" component={Add} />
      <Route path="/admin/edit/:id" component={Edit} />
      <Route path="/admin/categories" exact component={Categories} />
      <Route path="/admin/category/:id" exact component={EditDetails} />
      <Route path="/admin/categories/add" exact component={AddCategory} />
    </Router>
  );
}
