// imports
import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Navbar from './components/navbar';
import Routes from './config/routes';
import './App.css';

// primary component
function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'));

  const storeUser = (userId) => {
    setCurrentUser(userId);
    localStorage.setItem('uid', userId);
  }

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem('uid');
    setCurrentUser(null);
    props.history.push('/login');
  }

  return(
    <div>
      <Navbar currentUser={currentUser} logout={logout} />
      <Routes currentUser={currentUser} storeUser={storeUser} />
    </div>
  );
}

// exports
export default withRouter(App);