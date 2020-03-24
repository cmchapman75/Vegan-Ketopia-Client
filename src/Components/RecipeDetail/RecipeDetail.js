
import React, { Component } from 'react';
import './RecipeDetail.css';
import ControlBar from '../ControlBar/ControlBar';


class RecipeDetail extends Component {
  render() {

       // render recipe item detail
    return (
      <div className="RecipeDetail">
        <div className="RecipeDetail__icon">
          <div className="RecipeDetail__circle">
            {/* <FontAwesomeIcon icon={icons[this.props.fileType] || faFileAlt }/> */}
          </div>
        </div>
        <div className="RecipeDetail__content">
          <div className="RecipeDetail__heading">
            <ControlBar/>
            <div className="RecipeDetail_title">{this.props.title}</div>
            <div className="RecipeDetail__recipeType">{this.props.recipeType}</div>
            <div className="RecipeDetail_cuisineType">Cuisine: {this.props.cuisineType}</div>
            <div className="RecipeDetail__ingredients">Ingredients: {this.props.ingredients}</div>
          </div>
          <div className="RecipeDetail__actions">
            <div className="RecipeDetail__instructions">
              Instructions: {this.props.instructions}
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDetail;