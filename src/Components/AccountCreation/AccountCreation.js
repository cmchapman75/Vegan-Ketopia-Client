import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Auth from "../../Helpers/Auth";
// import UserContext from "../../Contexts/UserContext";

import "./AccountCreation.css";

class AccountCreation extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { }
        },        
    };

    state = { error: null };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleCreationSuccess = () => {
        const { history } = this.props;
        history.push("/login");
    };

    state = { error: null };

    createSubmit = e => {
        e.preventDefault();
        const { username, emailAddress, password } = this.state;
        console.log(username, emailAddress, password);
        this.setState({ error: null });

        Auth.createAccount({
            username: username,
            emailAddress: emailAddress,
            password: password
        })
        .then(user => {
            username.value = "";
            emailAddress.value = "";
            password.value = "";
            this.handleCreationSuccess();
        })
        .catch(res => {
            this.setState({ error: res.error });
        });
    };

    render() {
        let error = this.state.error;
        return(
            <div className="account-creation">
                <header className="creation-header"></header>
                <form className="creation-form" onSubmit={this.createSubmit}>
                    <div role={"alert"}>
                        {error && <p className="red" id="error-message">{this.state.error}</p>}                        
                    </div>
                    <label className="field-label">
                        Username:
                    </label>
                    <input
                        className="field-input"
                        required
                        name="username"
                        value={this.state.value}
                        onChange={this.handleChange}
                        // placeholder="Username"
                    />
                    <label className="field-label">
                        Email Address:
                    </label>
                    <input 
                        className="field-input"
                        required
                        name="emailAddress"
                        value={this.state.value}
                        onChange={this.handleChange}
                        // placeholder="Email Address"
                    />  
                    <label className="field-label">
                        Password:    
                    </label>  
                    <input 
                        className="field-input"
                        required
                        name="password"
                        value={this.state.value}
                        onChange={this.handleChange}
                        // placeholder="Password"
                    />  
                    <div className="button-con">
                        <button className="medButton" id="create-button">Create</button>
                        <br />
                        <Link to="/Login">
                            <button className="medButton">Have an account?</button>
                        </Link>                    
                    
                    </div>  

                </form>
            </div>
        )
    }

}


export default AccountCreation;