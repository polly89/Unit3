import './RecipeCard.css'
import food from '../assets/anh-nguyen-iJlYqriF-X0-unsplash.jpg';

function RecipeCard(){
    return(
            <div className='card card-hov'>
                <img src={food} alt="food."/>
                <p>Description</p>
                 <button className='blue-btn'>See More</button>
            </div>
    )
}
export default RecipeCard