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
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/titles' component={Profile} />
            <Route path='/profile' component={Signup} />
        </Switch>
    );
}

export default Routes;