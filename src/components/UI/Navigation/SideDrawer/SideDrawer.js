import React from 'react';
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Classes from './SideDrawer.module.css'
import Backdrop from '../../Backdrop/Backdrop'
import  Aux from '../../../../hoc/Auxil'

const sideDrawer = (props) => {
    let attachedClasses = [Classes.SideDrawer, Classes.Close];
    if(props.show){
        attachedClasses = [Classes.SideDrawer, Classes.Open]
    }

    return ( 
        <Aux>
        <Backdrop show={props.show} clicked={props.click} />
        <div className={attachedClasses.join(' ')} >
            <div className={Classes.Logo}>
            <Logo />
            </div>
            <nav>
            <NavigationItems />
            </nav>
        </div>
        </Aux>
     );
}
 
export default sideDrawer