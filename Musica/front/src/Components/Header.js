import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "./Images/MUSICA1.png";
import logo1 from "./Images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Header from './Header.css'


const Header1 = () => {
  const navigate = useNavigate();
  const [user, setLoginUser] = useState(null); 

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setLoginUser(userData);
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="main h-20 bg-black text-black w-full flex items-center justify-evenly sm:w-full sticky top-0 z-20">
        <div className="nav-left w-2/4">
          <Link to="/">
            <img className='sm:w-48 sm:ml-12 w-32 text-white logo' src={logo} alt="" />
            <img className='logo1' src={logo1} alt="" />
          </Link>
        </div>
        <div className="nav-right flex items-center w-3/5 justify-evenly">
          <div className="search flex items-center">
            <FontAwesomeIcon className='text-center bg-white h-10 w-5 rounded-s-3xl pl-3 sm:block hidden' icon={faMagnifyingGlass} />
            <Link to="/Search">
              <input className='h-10 rounded-e-3xl w-48 sm:block hidden border-none outline-none pl-1 sm:w-96' type="text" />
            </Link>
          </div>
          <Link to="/Favourite">
            <div className='text-white font-medium sm:block hidden'>MY MUSIC</div>
          </Link>
          {user ? (
            <button onClick={onLogout} className='text-black pr-3 pl-3 pt-2 pb-2 bg-white rounded-2xl font-medium'>Logout</button>
          ) : (
            <Link to="/Login">
              <div className='text-black pr-3 pl-3 pt-2 pb-2 bg-white rounded-2xl font-medium'>Login</div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Header1;
