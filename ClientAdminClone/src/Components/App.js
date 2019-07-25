import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Admin } from './Admin';
import Login from './Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import '../Styles/App.css';
import { Header } from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App()
{
  return (
    <Router>
      <ToastContainer />
      <Header />
      <div>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Login} />
        <ProtectedRoutes path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
