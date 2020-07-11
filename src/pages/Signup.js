// imports
import React from 'react';
import UserModel from '../models/User';
import './signup.css';
import { Link } from 'react-router-dom';

// signup page, non-auth users can signup for a new account
class Signup extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()

        UserModel.create(this.state).then(data => {
            this.setState({
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: ''
            });
            this.props.history.push('/login');
        });
    }

    render() {
        return(
            <div className="signup-container">
                <div className="signup-image">
                </div>
                <div className="signup-form-container">
                    <div className="signup-form">
                        <div className="form-header">
                            <h3>Sign Up</h3>
                            <h5>Provide us with some of your information to get free access to Watch Later.</h5>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <h5>First Name</h5>
                            <input onChange={this.handleChange}
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName} />

                            <h5>Last Name</h5>
                            <input onChange={this.handleChange}
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName} />

                            <h5>Username</h5>
                            <input onChange={this.handleChange}
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.username} />

                            <h5>Email</h5>
                            <input onChange={this.handleChange}
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email} />

                            <h5>Password</h5>
                            <input onChange={this.handleChange}
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password} />

                            <div className="form-footer">
                                <p>Already have an account? <Link to='/login'>Log In</Link></p>
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// exports
export default Signup;