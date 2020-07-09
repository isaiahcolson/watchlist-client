import React from 'react';

import Routes from '../../config/routes';
import Navbar from './navbar';

function Home() {
    return(
        <div>
            <Navbar />
            <Routes />
        </div>
    );
}

export default Home;