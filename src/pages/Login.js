// imports
import React from 'react';
import {Link} from 'react-router-dom';
import UserModel from '../models/User';
import './login.css'

// login page, auth users can login to an existing account
class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state).then(data => {
            if (!data.token) {
                return false
            }
            this.props.storeUser(data.token);
            this.props.history.push('/watchlist');
        }).catch(err => console.log(err));
    }

    render() {
        return(
            <div className="login-container">
                <div className="login-form-container">
                    <div className="login-form">
                        <div className="login-form-header">
                            <h3>Login</h3>
                            <h5>Provide us with some of your information to access your watchlist.</h5>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <h5>Username</h5>
                            <input onChange={this.handleChange}
                            type="text" required
                            id="username"
                            name="username"
                            value={this.state.username} />

                            <h5>Password</h5>
                            <input onChange={this.handleChange}
                            type="password" required
                            id="password"
                            name="password"
                            value={this.state.password} />

                            <div className="login-form-footer">
                                <button type="submit">Login</button>
                                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="login-image">
                </div>
            </div>
        );
    }
}

// exports
export default Login;