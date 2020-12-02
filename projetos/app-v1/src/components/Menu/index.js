import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    return (
        <button className="menu-container">
            <FontAwesomeIcon icon={faBars}/>
        </button>
    )
}