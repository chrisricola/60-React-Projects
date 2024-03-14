import axios from 'axios'
import React, { useState } from 'react'
import '../index.css'

const Home = () => {

  const [meal, setMeal] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getSearched = (e) => {
    if(e.key === "Enter") {
      axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=9360cf9860e346e6900829d648f3b51d&query=' + meal + '&number=12&addRecipeNutrition=true&instructionsRequired')
      .then(res => setRecipes(res.data.results))
      .catch(err => console.log(err)); 
    }
  }
  return (
    <div>
        <header className='hero'>
            <div className="hero-banner">
                <h4>Meal Planner</h4>
                <p>Tell me what you eat, and I will tell you who you are.</p>
                <input className='input-bar' type='text' placeholder='Press Enter' value={meal} onChange={(e) => {setMeal(e.target)}}/>
            </div>
        </header>
    </div>
  )
}

export default Home

// 9360cf9860e346e6900829d648f3b51d //