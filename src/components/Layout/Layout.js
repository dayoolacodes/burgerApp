import React from 'react';
import Aux from '../../hoc/Auxil'
import classes from './Layout.module.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
    return (
        <Aux> 
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <main className={classes.Content}>
        <Toolbar />
        <SideDrawer />
            {props.children}
        </main>
        </Aux>
     );
}
 
export default layout;