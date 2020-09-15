import React, {Component} from 'react'
import Aux from "../../hoc/Auxil"
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'


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
        purchasable: false, 
        showModal: false,
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

        toggleOrder = () =>{
            this.setState({showModal:true})
        }

        closeModalHandler =() =>{
            this.setState({showModal:false})
            // console.log("clicked close modal")
        }

        purchaseContinue=()=>{
            const order ={
                ingredient : this.state.ingredients,
                price: this.state.totalPrice,
                customer: {
                    name: "dayo",
                    email: "test@dayotest.com",
                    address: "1 test, Lagos"
                },
                delivery: "van",
                payment: "payment on delivery"
            }

            axios.post("order/", order)
            alert("Thank You! Your Burger Order is Processing ");
            window.location.reload();

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
                {/* {"Base Price: ₦"+ 200} */}
                <Modal show={this.state.showModal} close={this.closeModalHandler}>
                <OrderSummary ingredients={this.state.ingredients} 
                close={this.closeModalHandler}
                continue = {this.purchaseContinue} 
                price = {this.state.totalPrice}/>
                </Modal>
               <BuildControls addIngredients={this.addIngredients} 
               removeIngredients={this.removeIngredients}
               disabledInfo={disabledInfo} 
               currentPrice= {this.state.totalPrice}
               purchasable = {this.state.purchasable}
               orderSummary = {this.toggleOrder}
               />
            {/* <div>Helo</div> */}
            </Aux>
        )
    }
}

export default BurgerBuilder;