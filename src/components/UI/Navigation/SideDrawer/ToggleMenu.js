import React from 'react';
import classes from './ToggleMenu.module.css'


const toggleMenu = (props) => {
    return (
        <div>
            <div onClick={props.toggler} className={classes.DrawerToggle}> 
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
     );
}


export default toggleMenu;