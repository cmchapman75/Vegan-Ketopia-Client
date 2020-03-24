// import React, { Component } from 'react';

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faSearch } from '@fortawesome/free-solid-svg-icons';

// class SearchBox extends Component {
//     render() {
//         return (
//             <div className="SearchBox">
//                 {/* <FontAwesomeIcon icon={faSearch} /> */}
//                 <input placeholder="Kale, Spinach, Avocado" />
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


//contains the search feature for Recipe Search
class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <form onSubmit={e => this.props.handleSubmit(e)}>
          <label htmlFor="ingredient-search">Search: </label>
         
          <input 
            type="text"
            id="search"
            placeholder="Kale or Avocado" 
            value={this.props.searchTerms}
            onChange={e => this.props.handleUpdate(e.target.value)}/>
             <FontAwesomeIcon icon={faSearch}/>
         </form>
      </div>   
    );
  }
}

export default SearchBox;