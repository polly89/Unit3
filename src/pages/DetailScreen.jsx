import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './DetailScreen.css'

const DetailScreen = () => {  
  const {id} = useParams();
  const url = 'https://recipes.devmountain.com'
  const [recipe, setRecipe] = useState({})

  useEffect(()=> {
    axios
      .get(`${url}/recipes/${id}`)
      .then((res)=>{
        setRecipe(res.data);
      });
  }, []); 

  return (
    <section key={id}>
      <div className='bannerImg'
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.6)),
          url(${recipe.image_url})`,
      }}
      >
        <div className="adText">
          <h1>{recipe.recipe_name}</h1>
        </div>
      </div>

      <div className='details'>
        <div className='ingridients detailsCard'>
            <h2 className='h2-heads'>Recipe</h2>
            <div  className='p-margin'>
              <p>Prep Time: {recipe.prep_time} </p>
              <p>Cook Time: {recipe.cook_time} </p>
              <p>Serves: {recipe.serves}</p>
            </div>
              
            <h2 className='h2-heads'>Ingredients</h2>
            <div  className='p-margin'>
            {recipe.ingredients && recipe.ingredients.map((ing, index) => {
               return <h4>{ing.quantity} {ing.ingredient}</h4>
                })}
            </div>
              
        </div>
        <div className='instructions detailsCard'>
          <h2 className='h2-heads'>Instructions</h2>
            <div className='p-margin'>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {recipe.instructions && JSON.parse(recipe.instructions)}
            </p>          
          </div>
        </div>
      </div> 
    </section>
  );
};

export default DetailScreen;
