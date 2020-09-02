import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'


const controls=[
                {label: "Salad-(₦150)", type: "salad"},
                {label: "Bacon-(₦100)", type: "bacon"},
                {label: "Cheese-(₦50)", type: "cheese"},
                {label: "Meat-(₦200)", type: "meat"},
                ]


const buildControls = (props) => {
    return ( 
        <div className={classes.BuildControls}>
            <p><i>Current Price: ₦{props.currentPrice}</i></p>
            {controls.map(cntrl => (
            <BuildControl key={cntrl.label} 
            label={cntrl.label} 
            added={() => props.addIngredients(cntrl.type)}
            subtract={()=> props.removeIngredients(cntrl.type)}
            buttonDisabled = {props.disabledInfo[cntrl.type]} 
            />
            ))}
            <button className={classes.OrderButton} disabled={!props.purchasable}><b>Order Now!</b></button>
        </div>
     );
}
 
export default buildControls;