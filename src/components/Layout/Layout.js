import React, { Component } from 'react';
import Aux from '../../hoc/Auxil'
import classes from './Layout.module.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer : false
    }

    sideDrawerHandler =()=>{
        this.setState({showSideDrawer: false})
        // console.log('clicked')
    }

    sideDrawerToggle=()=>{
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer};
        })
    }

    render(){
        return(
        <Aux> 
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <main className={classes.Content}>
        <Toolbar sideDrawerHandler={this.sideDrawerToggle}/>
        <SideDrawer click={this.sideDrawerHandler} show={this.state.showSideDrawer}/>
            {this.props.children}
        </main>
        </Aux>
        )

    }

} 
 
export default Layout;