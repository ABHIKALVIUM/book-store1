import "./Navbar.css";
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './logo1.png';
import { navLinks, navRight } from '../../Data/Data';
import { VscMenu } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';

export default function Navbar({ data:books, handleData:onSearch }) {
  const [isNavLinksShowing, setIsNavLinkShowing] = useState(false);


  const handleSearch = (searchValue) => {
    let filterData= books.filter((e)=>{
        if(e.title.toLowerCase().includes(searchValue.toLowerCase())){
            return e;
        }
    })
    onSearch(filterData)
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link to={'/'} className="logo">
          <img id ='new-logo' src={Logo} alt="Logo" />
        </Link>
        <ul className={`nav-Links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`}>
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          {navRight.managements.map((item, index) => (
            <Link key={index} className="management-icons" to={item.link}>
              <item.icon />
            </Link>
          ))}
          <div className="search-box">
            <input
            id='input-btn'
              type="text"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target.value)}
            />

            <a href="/Register" className="register-link">
              <button id='new-btn'>Register</button>
            </a>
          </div>
          <button
            className="menu-button"
            onClick={() => setIsNavLinkShowing(!isNavLinksShowing)}
          >
            {!isNavLinksShowing ? <VscMenu /> : <GrClose />}
          </button>
        </div>
      </div>
    </nav>
  );
}