import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';


const App = () => {
  const api_id = process.env.REACT_APP_APP_ID;
  const api_key = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
   getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${api_id}&app_key=${api_key}`);
    const data = await response.json()
    setRecipes(data.hits);
  }

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
        title={recipe.recipe.title} 
        calories={recipe.recipe.calories} 
        recipe={recipe.recipe.image} 
        />
      ))}
    </div>
  )
}


export default App;
