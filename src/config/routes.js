import React from 'react';
import {Switch, Route} from 'react-router-dom';

function Routes(props) {
    return(
        <Switch>
            <Route exact path='/' component />
            <Route path='/signup' component />
            <Route path='/login' component />
            <Route path='/titles' component />
            <Route path='/profile' component />
        </Switch>
    );
}

export default Routes;