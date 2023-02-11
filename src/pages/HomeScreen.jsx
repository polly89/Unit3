import axios from 'axios'
import React, { useState, useEffect }from 'react'
import AdBanner from '../components/AdBanner'
import Search from '../components/Search'

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

  const handleSubmit = (search) => {
    console.log('Do a search with', search)
  }


  return (
    <div>
      <AdBanner />
      <Search onSubmit={handleSubmit} recipes={recipes}/>
    </div>
  )
}

export default HomeScreen;