import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return[...Array(props.ingredients[ingKey])].map((_,i) => 
        {
        return <BurgerIngredient key={ingKey + i} types={ingKey} />
    }
    );
    }).reduce((arr, el) => {
    return arr.concat(el)
    }, []);
    if(transformedIngredients.length < 1){
        transformedIngredients = <p style={{color: "#cecece"}}>Pls Add Ingredients</p>
    }
// console.log(transformedIngredients);

    return ( 
        <div className= {classes.Burger}>
         <BurgerIngredient types="bread-top" />   
            {transformedIngredients} 
         <BurgerIngredient types="bread-bottom" />   
        </div>
     );
}
 
export default Burger;