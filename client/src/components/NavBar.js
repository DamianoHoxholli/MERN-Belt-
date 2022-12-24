import React from 'react'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
    
    return (
        <div>
            <NavLink to='/pets/new'>add a pet to the shelter</NavLink>
            <NavLink to='/'>back to home</NavLink>
        </div>
    )
}

export default NavBar