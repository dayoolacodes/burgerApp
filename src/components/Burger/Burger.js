import React from 'react';
import './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => )

    return ( 
        <div className='Burger'>
         <BurgerIngredient types="bread-top" />   
         <BurgerIngredient types="meat" />   
         <BurgerIngredient types="salad" />   
         <BurgerIngredient types="bacon" />   
         <BurgerIngredient types="bacon" />   
         <BurgerIngredient types="cheese" />   
         <BurgerIngredient types="bread-bottom" />   
        </div>
     );
}
 
export default Burger;