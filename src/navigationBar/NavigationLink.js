import React from 'react';
import './NavigationLink.css';
import { NavLink } from "react-router-dom";

const NavigationLink = (props) => {
    return (
        <NavLink className={props.classes} to={props.to}>{props.title}</NavLink>
    );
}

export default NavigationLink;