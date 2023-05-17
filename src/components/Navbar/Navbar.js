import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = {s.nav}>
            <div >
                <NavLink to='/profile' className={linkData=> linkData.isActive ?  s.active : s.item}>Profile</NavLink>
            </div>
            <div className= { `${ s.item } ${ s.active }` }>
                <NavLink to='/dialogs' className={linkData=> linkData.isActive ?  s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={linkData=> linkData.isActive ?  s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' className={linkData=> linkData.isActive ?  s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings' className={linkData=> linkData.isActive ?  s.active : s.item}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;