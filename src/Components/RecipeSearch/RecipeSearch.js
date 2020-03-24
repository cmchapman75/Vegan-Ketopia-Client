import React, { Component } from 'react';

import './RecipeSearch.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import RecipeFilter from '../RecipeFilter/RecipeFilter';
import FilteringOptions from '../FilteringOptions/FilteringOptions';

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchTerms: '',
      filterOptions: '',
      filterOptionsCuisine: ''
    };
  }

handleSubmit = (searchSubmitEvent, searchInput ) => {
  searchSubmitEvent.preventDefault();
  this.setState({
    searchTerms: searchInput
  });

  const baseURL = "http://localhost:8000";
  // const key = "Lorem";
  const fullSearchUrl = this.fullQuery(baseURL, searchInput);
  // add key later
  fetch(fullSearchUrl)
    .then(res => {
      if (!res.ok) {
        throw new Error("Network Error!  Try Again!");
      }
      return res;
    })
    .then(res => res.json())
    .then(bookResultObj => {
      this.setState({
        recipes: bookResultObj,
        error: null
      });
    })
    .catch(error => {
      this.setState({
        error: error.message
      });
    });
};
fullQuery = (baseURL, searchInput ) => {
  // add key later
  const { filterOptions, filterOptionsCuisine } = this.state;
  let fullQuery;
  if (searchInput !== "") {
    fullQuery = "?q=" + searchInput;
  }
  if (filterOptions !== "") {
    fullQuery = fullQuery + "&recipeType" + filterOptions;
  }
  if (filterOptionsCuisine !== "") {
    fullQuery = fullQuery + "&cuisineType" + filterOptionsCuisine;
  }

  const fullUrl = baseURL + fullQuery;
  // add key later
  return fullUrl;
};


updateSearchTerm(term) {
  this.setState({
    searchTerms: term
  })
  console.log(term);
}

updateFilterOptions(options) {
  this.setState({
    filterOptions: options      
  })
  console.log(options);
}

updateFilterOptionsCuisine(optionsCuisine) {
  this.setState({
    filterOptionsCuisine: optionsCuisine   
  })
  console.log(optionsCuisine);
}

render() {
  const { recipes } = this.state;

  return (
    <div className="RecipeSearch">
      <Header />
      <SearchBox 
        handleSubmit={this.handleSubmit}
        handleUpdate={term =>this.updateSearchTerm(term)} />
      <FilteringOptions
        handleFilterChange={options => this.updateFilterOptions(options)}
        handleFilterChangeCuisine={optionsCuisine => this.updateFilterOptionsCuisine(optionsCuisine)}
        />
      <RecipeFilter
        recipes={recipes}
        />
    </div>
  )
}


//   render() {
//     return (
//       <div className="RecipeSearch">
//         <div className="RecipeSearch__heading">
//           <h1>Recipe Search</h1>
//         </div>
//         <div className="RecipeSearch__controls">
//           <SearchBox
//             filterOptions={this.state.filterOptions}
//             filterOptionsCuisine={this.state.filterOptionsCuisine}
//             handleUpdate={term =>this.updateSearchTerm(term)}
//             // handleFilterChange={options => this.updateFilterOptions(options)}
//             // handleFilterChangeCuisine={optionsCuisine => this.updateFilterOptionsCuisine(optionsCuisine)}
//             handleSubmit={e => this.handleSearch(e)}            
//              />
//           <FilterOptions
//             filterOptions={this.filterOptions}
//             />
//         </div>
//       </div>
//     );
//   }
}

export default RecipeSearch;

// handleSearch = (e) => {
//   e.preventDefault();
//   let searchArray = this.state.searchTerms.split(' ');
//   let searchTerms = searchArray.join(',+');
//   let URL =`http://localhost:8000/recipes`;

//   fetch(URL)
//     .then(res => {      
//       if (!res.ok) {
//         throw new Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then(results => {  
//       console.log("results:", results)    
//       this.setState({
//         recipes: results,
//       });
      
//     })
//     .catch(err => {
//       this.setState({
//         error: 'That does not exist',
//       });
//     })
// }