import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
      <div className="">
        <div className='flex justify-around text-xl '>
          <Link className='hover:text-green-500' to="/">Home</Link>
          <Link className='hover:text-green-500' to="/about">About</Link>
          <Link className='hover:text-green-500' to="/contact">Contact</Link>
          <Link className='hover:text-green-500' to="/friends">Friends</Link>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default Header;