import React from 'react';
import { FaBars } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import { useGlobalContext } from './context';
import NavLinks from './Navlinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;