import React from 'react';
import UserModel from '../models/User';

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
            console.log(data);
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
            <div>
                <p>Sign Up</p>
                <form onSubmit={this.handleSubmit}>
                    <p>First Name</p>
                    <input onChange={this.handleChange}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={this.state.firstName} />

                    <p>lastName</p>
                    <input onChange={this.handleChange}
                     type="text"
                     id="lastName"
                     name="lastName"
                     value={this.state.lastName} />

                     <p>Username</p>
                     <input onChange={this.handleChange}
                     type="text"
                     id="username"
                     name="username"
                     value={this.state.username} />

                     <p>Email</p>
                     <input onChange={this.handleChange}
                     type="email"
                     id="email"
                     name="email"
                     value={this.state.email} />

                     <p>Password</p>
                     <input onChange={this.handleChange}
                     type="password"
                     id="password"
                     name="password"
                     value={this.state.password} />

                     <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Signup;