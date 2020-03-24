import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Components/Landing/Landing';

import AccountCreationRoute from './Routes/AccountCreationRoute/AccountCreationRoute';
// import AccountCreation from '../src/Components/AccountCreation/AccountCreation';
import LoginRoute from './Routes/LoginRoute/LoginRoute';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
// // import RecipesRoute from './Routes/RecipesRoute/RecipesRoute';
import RecipeAdd from './Components/RecipeAdd/RecipeAdd';
import RecipeEdit from './Components/RecipeEdit/RecipeEdit';
import RecipeDetail from './Components/RecipeDetail/RecipeDetail'
import RecipeSearch from './Components/RecipeSearch/RecipeSearch';
// // import FilterableList from './FilterableList/FilterableList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // recipes: [],
      // searchTerm: '',
      // filterOptions: 'All',
      // filterOptionsCuisine: 'All'
    };
  }

  render() {
    return (
      <div className="App">
        <main>
          <Header />
          <Switch>
          <Route
              exact
              path={"/"}
              component={Landing}
            />
            <Route
              exact
              path={"/accountCreation"}
              component={AccountCreationRoute}
              />
            <Route
              exact
              path={"/login"}
              component={LoginRoute}
            />
            <Route
              exact  
              path={"/home"}
              component={Home}
            />    
            <Route
              exact
              path={"/recipes/search"}
              // props={}
              component={RecipeSearch}
            />
            <Route
              exact
              path={"/recipes/create"}
              component={RecipeAdd}
            />
            <Route
              exact
              path={"/recipes/:recipeId"}
              component={RecipeDetail}
            />
            <Route
              exact
              path={"/edit-recipes/:recipeId"}
              component={RecipeEdit}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
  

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const baseUrl = 'http://localhost:8000/recipes';
  //   const params = [];

  //   if (this.state.term) {
  //     params.push(`term=${this.state.term}`);
  //   }
  //   const query = params.join('$');
  //   const url = `${baseUrl}?${query}`;

  //   fetch(url)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({
  //         recipes: data,
  //         error: null
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: 'Sorry, No recipes here!'
  //       });
  //     })
  // }

//   render() {
    
//     return (
//       <div className="App">
//             <Header />
//             {/* <Home /> */}
//             {/* <Landing /> */}
//             {/* <RecipeAdd /> */}
//             <RecipeAdd />
//             <RecipeSearch
//               // searchTerm={this.state.searchTerm}
//               filterOptions={this.state.filterOptions}
//               handleUpdate={term =>this.updateSearchTerm(term)}
//               handleFilterChange={options => this.updateFilterOption(options)}
//               handleFilterChangeCuisine={optionsCuisine => this.updateFilterOptionsCuisine(optionsCuisine)}
//               handleSumbit={e => this.handleSubmit(e)}   
//               />
//             <FilterableList
//               recipes={this.props.recipes}  
//               searchTerm={this.state.searchTerm}
//               filterOptions={this.state.filterOptions}
//               filterOptionsCuisine={this.state.filterOptionsCuisine}/>
//       </div>

//     );
//   }
// }

export default App;
