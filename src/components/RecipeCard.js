import { useNavigate } from 'react-router-dom';
import './RecipeCard.css'


function RecipeCard({ recipe }){
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
      }
    return(
            <div key={recipe.recipe_name} className='card card-hov'>
                <div className='image-cont'>
                  <img src={recipe.image_url} alt="food."/>  
                </div>
                <p className='recipe-name'>{recipe.recipe_name}</p>
                 <button className='blue-btn hov' onClick={handleClick}>See More</button>
            </div>
    )
}
export default RecipeCard