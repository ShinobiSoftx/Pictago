import React, { Fragment, useState } from 'react'
import { NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar({setTitle}) {
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
                <NavLink to="/saved" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}} >
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Saved</span>
                </NavLink>
            </div>
        <div className="input-group">
                    <div className="form-outline">
                        <input type="search" id="form1" className="form-control" placeholder="Search Whatever You Want" onChange={(e)=>setTitle(e.target.value)} />
                        <label className="form-label" htmlFor="form1">Search</label>
                    </div>

            <div id='Color-switcher' onClick={()=> setToggle(!toggle)}>
                <div id={toggle ? 'Color-switcher-mover' :  'Color-switcher-moved'}></div>
            </div>
        </div>
            
        </nav>
    </Fragment>
)
}

export default Navbar;
