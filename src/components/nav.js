import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default function(){
    return(
        <div>
            <NavLink exact to ="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
        </div>
    )
}