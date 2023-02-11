import { useState } from 'react';
import './NewRecipeScreen.css';
import { Formik } from 'formik';
import axios from 'axios';

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');


  const url = 'https://recipes.devmountain.com'

  const initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: '',
  };

  const ingredientDisplay = ingredients.map((ingredients)=> {
    return (
      <li>
        {ingredients.quantity} {ingredients.name}
      </li>
    )
  })
  const addIngredient = ()=>{
    setIngredients([...ingredients, {name, quantity}]);
    setName('');
    setQuantity('');
  }
  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);

    axios
      .post(`${url}/recipes`, values)
      .then((res)=> {
        console.log(res.data);
      })
      .catch((err)=> {
        console.log(err);
      });
  };

  return (
    <section className='new-recipes-form'>
      <h1 className='new-recipe-title'>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} on onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className='add-recipe'>
            <input
              className='user-input'
              type='text'
              placeholder='Name'
              value={values.recipeName}
              onChange={handleChange}
              name='recipeName'
            />
            <input
              className='user-input'
              type='text'
              placeholder='Image URL'
              value={values.imageURL}
              onChange={handleChange}
              name='imageURL'
            />

            <div className='type'>
              <input
                type='radio'
                value='Cook'
                onChange={handleChange}
                name='type'
              />
              Cook
              <input
                type='radio'
                value='Bake'
                onChange={handleChange}
                name='type'
              />
              Bake
              <input
                type='radio'
                value='Drink'
                onChange={handleChange}
                name='type'
              />
              Drink
            </div>

            <div>
              <input
                className='user-input dur-por'
                type='text'
                placeholder='Prep Time'
                value={values.prepTime}
                onChange={handleChange}
                name='prepTime'
              />
              <input
                className='user-input dur-por'
                type='text'
                placeholder='Cook Time'
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                className='user-input dur-por'
                type='text'
                placeholder='Serves'
                value={values.serves}
                onChange={handleChange}
                name='serves'
              />
            </div>

            <div>
              <div className='ing-list-disp'>
                <div>
                  <input
                    className='user-input'
                    type='text'
                    placeholder='Ingredient'
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    name='ingredients'
                  />
                  <br />
                  <input
                    className='user-input'
                    type='text'
                    placeholder='Quantity'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)} 
                  />
                </div>
              <div className='ing-disp'>
               <ul> {ingredientDisplay}</ul>
              </div>
              </div>
              <div>
                <button 
                className='orange-btn btn-hov'
                type='button'
                onClick={addIngredient}
                > Add Another </button>
              </div>
            </div>
            <br />
            <div>
              <div>
                <textarea
                  className='ins'
                  rows={5}
                  placeholder='What are the instructions?'
                  onChange={handleChange} 
                  value={values.instructions}
                  name='instructions'
                />
              </div>
              <button 
              type='submit' 
              className='blue-btn hov locate'
              >Save</button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
