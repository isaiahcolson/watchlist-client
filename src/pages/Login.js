import React from 'react';

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
        TODO
    }

    render() {
        return(
            <div>
                <p>login</p>
                <form onSubmit={this.handleSubmit}>
                    <p>Username</p>
                    <input onChange={this.handleChange}
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username} />

                    <p>Password</p>
                    <input onChange={this.handleChange}
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password} />

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;