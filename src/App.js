import React, {useState} from 'react';

import Navbar from './components/navbar';
import Routes from './config/routes';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'));

  const storeUser = (userId) => {
    setCurrentUser({currentUser:userId});
    localStorage.setItem('uid', userId);
  }

  return(
    <div>
      <Navbar currentUser={currentUser} />
      <Routes currentUser={currentUser} storeUser={storeUser} />
    </div>
  );
}

export default App;