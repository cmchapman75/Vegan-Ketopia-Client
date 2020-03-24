import React, { Component } from  'react';
import { Link } from 'react-router-dom';
// import Context from '../Context/Context';


class NavMenu extends Component {


    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
         <div className="header-container">   
          {/* <header className="Nav-Header"> */}
              <Link to="/HomePage">
                  Home
              </Link>
              <Link to="/Favorites">
                  Favorites
              </Link>
              <Link to="RecipeSearch">
                  Recipe Search
              </Link>
              <Link to="Profile">
                  Profile
              </Link>
          {/* </header>  */}
          </div>   
        )
    }
}

export default NavMenu;
