import React from 'react';
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
    return ( 
        <div className={Classes.SideDrawer}>
            <div style={{boxSizing: "border-box", width:"20px", alignItems:"center"}}>
            <Logo />
            <NavigationItems />
            </div>
        </div>
     );
}
 
export default sideDrawer