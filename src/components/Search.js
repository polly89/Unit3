import { useState } from 'react';
import './Search.css';
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from './RecipeCard'; 

function Search ({ onSubmit, recipes }){
    const[search, setSearch] = useState('');
 
    const handleFormSubmit = (e) => {
        e.preventDefault();

        onSubmit(search)
    }
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .slice(0,3)
    .map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    })

    return (
        <div >
        <form onSubmit={handleFormSubmit} className='search'>
            <BiSearchAlt2 size="2em" color="#DA7635" />
            <input
                className='search-bar'
                placeholder='Search for a recipe!'
                value={search}
                onChange={handleChange}
            />
        </form >
            <div className='card-cont' >   
                {recipeDisplay ? recipeDisplay : (<p>No matches found!</p>)}
            </div>
        </div>
    )
}
export default Search;