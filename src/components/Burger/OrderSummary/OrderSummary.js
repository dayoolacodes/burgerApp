import React from 'react';
import Aux from '../../../hoc/Auxil'

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
            </ul>
        </Aux>
     );
}
 
export default orderSummary;