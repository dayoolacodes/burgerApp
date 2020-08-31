import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return[...Array(props.ingredients[ingKey])].map((_,i) => 
        {
        return <BurgerIngredient key={ingKey + i} types={ingKey} />
    }
        );
    });

    return ( 
        <div className= {classes.Burger}>
         <BurgerIngredient types="bread-top" />   
            {transformedIngredients} 
         <BurgerIngredient types="bread-bottom" />   
        </div>
     );
}
 
export default Burger;