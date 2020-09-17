import React, {Component} from 'react'
import Aux from "../../hoc/Auxil"
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'



const INGREDIENTS_PRICES={
    salad: 150,
    bacon: 100,
    cheese: 50,
    meat: 200 
}

class BurgerBuilder extends Component{
    state = {
        ingredients:null,
        totalPrice : 200,
        purchasable: false, 
        showModal: false,
        loading: false,
        error: false
    }

    componentDidMount(){
        axios.get('https://react-my-burger-89bdb.firebaseio.com/ingredients.json')
        .then(res => this.setState({ingredients:res.data}))
        .catch(err => {
            this.setState({error:true})
        });
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
            this.setState({loading: true})
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

            axios.post("/order.json", order)
            .then(response => this.setState({loading: false, showModal: false}))
            .catch(err => this.setState({loading: false, showModal: false}))

            alert("Thank You! Your Burger Order is Processing ");
        }

    render(){
        let disabledInfo ={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 
        }
        
        let orderSummary = null;      
        let burger = this.state.error? <p style={{textAlign:"center"}}>Ingredient not loaded!</p> : <Spinner />
        if(this.state.ingredients){
        burger = 
        <Aux>
             <Burger ingredients={this.state.ingredients} />
               <BuildControls addIngredients={this.addIngredients} 
               removeIngredients={this.removeIngredients}
               disabledInfo={disabledInfo} 
               currentPrice= {this.state.totalPrice}
               purchasable = {this.state.purchasable}
               orderSummary = {this.toggleOrder}
               />
        </Aux>
        orderSummary = 
        <OrderSummary ingredients={this.state.ingredients} 
        close={this.closeModalHandler}
        continue = {this.purchaseContinue} 
        price = {this.state.totalPrice} />
        }
        
        if(this.state.loading){
            orderSummary = <Spinner />
        }
        return(
            <Aux>
                <Modal show={this.state.showModal} close={this.closeModalHandler}>
                    {orderSummary}
                </Modal>
            {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);