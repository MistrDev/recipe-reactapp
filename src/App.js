import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';


const App = () => {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
   getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json()
    setRecipes(data.hits);
  }
 // Cant figure out why im getting a CORS error. response has keys undefined //

  return(
    <div className="App">
      <form className='search-form'>
        <input className="search-bar" type='text'/>
        <button className="search-button" type="submit">
         Search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        recipe={recipe.recipe.image} 
        />
      ))}
    </div>
  )
}


export default App;
