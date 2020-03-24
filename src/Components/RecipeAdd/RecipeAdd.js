import React, { Component } from 'react';
import './RecipeAdd.css';

class RecipeAdd extends Component {
   render() {
     return (
        <div className="recipeAddForm">
            <form id="add-recipe" className="recipe-form">
                <div className="form-section">
                    <label className="recipe-name">Recipe Name: </label>
                    <input type="text" name="recipe-name" placeholder="Coconut Flatbread" required></input>
                </div>
                <div className="form-section">
                    <label className="recipe-ingredients">Ingredients: </label>
                    <textarea name="recipe-ingredients" rows="25" placeholder="1 Cup Coconut Flour" required></textarea>
                </div>
                <div className="form-section">
                    <label className="recipe-instructions">Instructions: </label>
                    <textarea name="recipe-instructions" rows="45" placeholder="Simmer over low heat" required></textarea>
                </div>
            </form>
             <div className="cuisine-type">
                <select>
                    <option value="Mexican">Mexican</option>
                    <option value="Korean">Korean</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Thai">Thai</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Russian">Russian</option>
                    <option value="Italian">Italian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                </select>
           </div>

           <div className="Meal Type">
                <select>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                    <option value="snack">Snack</option>
                    <option value="fat-bombs">Fat Bombs</option>
                </select>
           </div>

         </div>
 
            // Future options
          /* <div class="nutrition-info-container" class="form-section">
            <label for="serving-size">Serving Size</label>
            <input type="number" name="serving-size" placeholder="79">
            <label for="calories">Calories</label>
            <input type="number" name="Calories" placeholder="0">
            <label for="total-fat">Total Fat</label>
            <input type="number" name="total-fat" placeholder="0">
            <label for="cholesterol">Cholesterol</label>
            <input type="number" name="cholesterol" placeholder="0">
            <label for="sodium">sodium</label>
            <input type="number" name="sodium" placeholder="0">
            <label for="total-carbs">Total Carbohydrates</label>
            <input type="number" name="total-carbs" placeholder="6g">
            <label for="net-carbs">Net Carbs</label>
            <input type="number" name="net-carbs" placeholder="2g">
            <label for="dietary-fiber">Dietary Fiber</label>
            <input type="number" name="dietary-fiber" placeholder="4g">
            <label for="total-sugars">Total Sugars</label>
            <input type="number" name="total-sugars" placeholder="2g">
            <label for="protein">Protein</label>
            <input type="number" name="protein" placeholder="4g">
            <label for="vitamin-d">Vitamin D</label>
            <input type="number" name="viewport" placeholder="0%">
            <label for="vitamin-c">Vitamin C</label>
            <input type="number" name="vitamin-c" placeholder="0%">
            <label for="calcium">Calcium</label>
            <input type="number" name="calcium" placeholder="2%">
            <label for="iron">Iron</label>
            <input type="number" name="iron" placeholder="10%">
            <label for="potassium">Potassium</label>
            <input type="number" name="potassium" placeholder="0%">
          </div>


          <div class="marco-type">
            <select>
            <option value="fat">Fat</option>
            <option value="protein">Protein</option>
            <option value="carbohydrates">Carbohydrates</option>           
          </select>
          </div> */


        //    </div>
           
       );
   }
}

export default RecipeAdd;
