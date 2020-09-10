import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import ToggleMenu from '../SideDrawer/ToggleMenu'

const toolbar = (props) => {
    return ( 
        <header className={classes.Toolbar}>
            <ToggleMenu toggler={props.sideDrawerHandler} />
            {/* <div onClick={props.sideDrawerHandler}> Menu </div> */}
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
     );
}
 
export default toolbar;