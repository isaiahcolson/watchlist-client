import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import Navbar from './components/navbar';
import Routes from './config/routes';
import UserModel from './models/User';
import './App.css';

function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'));

  const storeUser = (userId) => {
    setCurrentUser(userId);
    localStorage.setItem('uid', userId);
  }

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem('uid');
    UserModel.logout().then(res => {
      console.log(res);
      setCurrentUser(null);
      props.history.push('/login');
    });
  }

  return(
    <div>
      <Navbar currentUser={currentUser} logout={logout} />
      <Routes currentUser={currentUser} storeUser={storeUser} />
    </div>
  );
}

export default withRouter(App);