import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';

function Routes(props) {
    return(
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/titles' component={Home} />
            <Route path='/profile' component={Profile} />
        </Switch>
    );
}

export default Routes;