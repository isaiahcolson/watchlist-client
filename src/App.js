import React from 'react';

import Navbar from './components/navbar';
import Routes from './config/routes';
import './App.css';

function App() {
  return(
    <div>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;