import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'} style={{ position: 'sticky' }}>
        <div className='navbar-container'>
          <NavLink to={'/'} className='navbar-logo' onClick={closeMobileMenu}>
            Rick and Morty
            <i className="fas fa-globe-europe"/>
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                to={'/characters'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Characters
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={'/episodes'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Episodes
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={'/locations'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Locations
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={'/myWatchList'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My watch list
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};