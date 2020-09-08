import React from 'react';
import Aux from '../../../hoc/Auxil'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const summary = Object.keys(props.ingredients).map(igKey => 
        // <li key={igKey}><p style={{textTransform:"capitalize"}}> {igKey + ":" } <span>{props.ingredients[igKey] }</span></p></li>
        <li key={igKey}> <span style={{textTransform:"capitalize"}}> {igKey} </span>: {props.ingredients[igKey]} </li>
        )
        
    return ( 
        <Aux>
            <h3>Your Order-Summary</h3>
            <p> The following is the summary of your order </p>
            <ul>
            {summary}
            <p>Continue to Checkout? </p>
            <p>Total Price: ₦{props.price}</p>
            <Button btnType={"Success"} clicked={props.continue}>CONTINUE</Button>
            <Button btnType={"Danger"} clicked={props.close}>CANCEL</Button>
            
            </ul>
        </Aux>
     );
}
 
export default orderSummary;