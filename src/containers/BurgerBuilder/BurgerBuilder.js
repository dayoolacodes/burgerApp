import React, {Component} from 'react'
import Aux from "../../hoc/Auxil"
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICES={
    salad: 5,
    bacon: 6,
    cheese: 3,
    meat: 8, 
}

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        totalPrice : 4
    }

        addIngredients=(type)=>{
            const newIngredientState = {
                ...this.state.ingredients
            }
        newIngredientState[type] += 1;
        const newPrice = INGREDIENTS_PRICES[type] + this.state.totalPrice;
            this.setState({ingredients:newIngredientState, totalPrice : newPrice })
        }

        removeIngredients=(type)=>{
            const newIngredientState = {
                ...this.state.ingredients
            }
            if(newIngredientState[type]<=0){
                // if ingredient has not been added doNothing
                return;
            }
            newIngredientState[type] -= 1;
            const newPrice = INGREDIENTS_PRICES[type] - this.state.totalPrice;
            this.setState({ingredients:newIngredientState, totalPrice : newPrice })   
            
        }

    render(){
        return(
            <Aux>
                <div> <Burger ingredients={this.state.ingredients} /></div>
               <BuildControls addIngredients={this.addIngredients} removeIngredients={this.removeIngredients} />
            </Aux>
        )
    }
}

export default BurgerBuilder;