import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./views/signUp";

import Home from "./views/home";
import Notifications from "./views/notifications";
import Footer from "./components/footer";
import Header from "./components/header";
import Details from "./views/details";
import Tiles from "./views/tiles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default class App extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Oups...! Wystąpił problem...</div>;
    }

    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/details/:id" component={Details} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/tiles" component={Tiles} />
        </Router>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}
