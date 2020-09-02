import React, {Component} from 'react'
import Aux from "../../hoc/Auxil"
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICES={
    salad: 150,
    bacon: 100,
    cheese: 50,
    meat: 200 
}

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        totalPrice : 200,
        purchasable: false
    }

    UpdatedPurchase=(ingredients)=>{
        // const ingredients = {...this.state.ingredients}
        const total = Object.keys(ingredients)
        .map(ingKey => ingredients[ingKey])
        .reduce((sum, el) =>{ 
            return sum + el},0)
            this.setState({purchasable:total>0})
        }
        addIngredients=(type)=>{
            const newIngredientState = {
                ...this.state.ingredients
            }
        newIngredientState[type] += 1;
        const newPrice = INGREDIENTS_PRICES[type] + this.state.totalPrice;
            this.setState({ingredients:newIngredientState, totalPrice : newPrice })
            this.UpdatedPurchase(newIngredientState)
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
            const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type] ;
            this.setState({ingredients:newIngredientState, totalPrice : newPrice })   
            this.UpdatedPurchase(newIngredientState)
        }

    render(){
        let disabledInfo ={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 
        }
        
        return(
            <Aux>
                <div> 
                <Burger ingredients={this.state.ingredients} />
                </div>
                {"Base Price: ₦"+ 200}
               <BuildControls addIngredients={this.addIngredients} 
               removeIngredients={this.removeIngredients}
               disabledInfo={disabledInfo} 
               currentPrice= {this.state.totalPrice}
               purchasable = {this.state.purchasable}
               />
            {/* <div>Helo</div> */}
            </Aux>
        )
    }
}

export default BurgerBuilder;