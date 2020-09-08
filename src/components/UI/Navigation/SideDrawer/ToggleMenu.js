import React from 'react';

const toggleMenu = (props) => {
    return (
        <h4 onClick={props.toggler}> Toggle </h4>
     );
}

export default toggleMenu;