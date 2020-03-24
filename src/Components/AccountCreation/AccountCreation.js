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

    handleCreationSuccess = () => {
        const { history } = this.props;
        history.push("/login");
    };

    state = { error: null };

    createSubmit = e => {
        e.preventDefault();
        const { user_name, email_address, password } = e.target;

        this.setState({ error: null });

        Auth.createAccount({
            user_name: user_name.value,
            email_address: email_address.value,
            password: password.value
        })
        .then(user => {
            user_name.value = "";
            email_address.value = "";
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
                        classname="field-input"
                        required
                        name="user_name"
                        // placeholder="Username"
                    />
                    <label className="field-label">
                        Email Address:
                    </label>
                    <input 
                        className="field-input"
                        required
                        name="email_address"
                        // placeholder="Email Address"
                    />  
                    <label className="field-label">
                        Password:    
                    </label>  
                    <input 
                        className="field-input"
                        required
                        name="password"
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