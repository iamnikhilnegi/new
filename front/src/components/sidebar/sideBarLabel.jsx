import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';

function SideBarLabel(props)
{

    return(

        
        <Link to={props.toPath}><h1>{props.Label}</h1></Link>
        
    );
}

export default SideBarLabel;
