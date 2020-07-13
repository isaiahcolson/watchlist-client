// imports
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import TitleShow from '../pages/TitleShow';
import Watchlist from '../pages/Watchlist';

// routes
function Routes(props) {
    return(
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' 
            render={(routeComponentProps) => {
                return <Login 
                    { ...routeComponentProps }
                    currentUser={props.currentUser}
                    storeUser={props.storeUser}
                />
            }} />
            <Route path='/titles/:id' component={TitleShow} />
            <Route path='/titles' component={Home} />
            {/* <Route path='/profile' component={Profile} currentUser={props.currentUser} /> */}
            <Route path='/profile'
            render={(routeComponentProps) => {
                return <Profile 
                    { ...routeComponentProps }
                    currentUser={props.currentUser}
                    logout={props.logout}
                />
            }} />
            <Route path='/watchlist' component={Watchlist} />
        </Switch>
    );
}

// exports
export default Routes;