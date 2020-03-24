import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="home-container">
                <h1>Welcome!</h1>
                <ul id="home-link-list">
                    <Link
                        className="home-link-text"
                        to={"/recipes/search"}>
                        <li className="home-search">Search Recipes</li>
                    </Link>
                    <Link
                        className="home-link-text"
                        to={"/recipes/create"}>
                        <li className="home-search">Add A Recipe</li>
                    </Link>
                    <Link
                        className="home-link-text"
                        to={"/recipes/:recipeId"}>
                        <li className="home-search">Edit Recipes</li>
                    </Link>
                    <Link
                        className="home-link-text"
                        to={"/edit-recipes/:recipeId"}>
                        <li className="home-search">Recipe Favorites</li>
                    </Link>
                </ul>
                
            </div>
        )
    }
}

export default Home;