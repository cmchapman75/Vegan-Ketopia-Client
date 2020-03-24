import React, { Component } from 'react';
import './Landing.css';
import { Link } from  'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="Landing">
                <header className="Landing-Header">
                    <div className="Branding-logo">
                        <img className="Landing-Logo" alt="logo"/>
                    </div>
                    <h4 className="Landing-Slogan">
                        The Cruelty Free Keto Recipe Stop!
                    </h4>
                    <div className="Home-Button" >
                        <Link className="account-creation" to="/AccountCreationRoute">
                            Enter to find the tastiest recipes!
                        </Link>
                    </div>
                </header>
                <section className="Landing-Info">
                    <h2 className="intro-info">What is Vegan Ketopia</h2>
                    <p className="intro-container">
                    Vegan Ketopia is your one stop for healthy and tasty vegan keto meals.
            You will have the ability to search for recipes using ingredients, macros, meal type
            or cuisine type.  You will have the ability to add any of your favorite recipes to
            the app, as well as mark your favorites.
                    </p>
                </section>
            </div>
        )
    }
}

export default Landing;

