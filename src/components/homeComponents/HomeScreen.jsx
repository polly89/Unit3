import axios from 'axios'
import React, { useState, useEffect }from 'react'
import AdBanner from './AdBanner'
import RecipeCard from './RecipeCard'
import Search from './Search'

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([])
  const url = 'https://recipes.devmountain.com'

  const getRecipes = () => {
    axios
      .get(`${url}/recipes`)
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipes()
  },[])

  return (
    <div>
      <AdBanner />
      <Search />
      <div className='card-cont'>   
        <RecipeCard recipes={recipes}/>
        <RecipeCard recipes={recipes}/>
        <RecipeCard recipes={recipes}/>
      </div>
    </div>
  )
}

export default HomeScreen;