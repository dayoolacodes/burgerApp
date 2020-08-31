import React from 'react';
import './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return[...Array(props.ingredients[ingKey])].map((_,i) =>   {
            <BurgerIngredient key={ingKey + i} types={ingKey} />
        })
    })

    return ( 
        <div className='Burger'>
         <BurgerIngredient types="bread-top" />   
        {transformedIngredients}  
         <BurgerIngredient types="bread-bottom" />   
        </div>
     );
}
 
export default Burger;