import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className = {s.header}>
            <img
                src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9EXUSa_uX8p8GJQ5Si7rIMf4OOPxK5Piag&usqp=CAU' />
        </header>
    );
};

export default Header;