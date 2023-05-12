import React, { Fragment, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import { NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const [toggle, setToggle] = useState(true)
return (
    <Fragment>
        <nav className={toggle ? '' : 'navBarColor'}>
            <div className='nav-options'>
                <h1 id={toggle ? '' : 'heading'}>Pictago</h1>
                <NavLink to="/posts" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}} >
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Feed</span>
                </NavLink>
                <NavLink to="/add" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}} >
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Create</span>
                </NavLink>
                <NavLink to="/categories" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}} >
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Categories</span>
                </NavLink>
                <NavLink to="/Pricing" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}} >
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
                </NavLink>
            </div>
            <div className='input-group'>
            <input type='text' placeholder='Search Whatever You Want'/>
            <HiSearch fontSize={21} color="green" id='search'/>
            <div id='Color-switcher' onClick={()=> setToggle(!toggle)}>
                <div id={toggle ? 'Color-switcher-mover' :  'Color-switcher-moved'}></div>
            </div>
            </div>
            
        </nav>
    </Fragment>
)
}

export default Navbar;