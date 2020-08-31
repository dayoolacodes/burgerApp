 import React from 'react';
 import './BurgerIngredients.css';

 const burgerIngredient = (props) => {
    //  <div className='hello'>hello</div>
    let ingredient = ''
    switch(props.types){
        case ('bread-bottom'):
            ingredient = 
            <div className="BreadBottom"></div>;
            break;
        case ('bread-top'):
            ingredient = <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            break;
        case ('meat'): 
            ingredient = <div className="Meat"></div>
            break;
        case ('cheese'): 
            ingredient = <div className="Cheese"></div>
            break;
        case ('salad'): 
            ingredient = <div className="Salad"></div>
            break;
        case ('bacon'): 
            ingredient = <div className="Bacon"></div>
            break;
        default :
            ingredient = null
            break;
        }
    return ingredient;
 }
  
 export default burgerIngredient;