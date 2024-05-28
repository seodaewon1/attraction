import React from 'react'

import { headerMenus, searchKeyword } from '../../data/menu';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {headerMenus.map((menu, key) => (
                    <li key={key}>
                        <Link to={menu.src}>
                            {menu.icon}<span>{menu.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {searchKeyword.map((menu, key) => (
                    <li key={key}>
                        <Link to={menu.src}>
                            <span>{menu.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu