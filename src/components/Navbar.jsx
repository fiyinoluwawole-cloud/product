import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="nav">

      <h1>Store</h1>

      <div className='links'>
        <NavLink className={({isActive}) => isActive ? "underline" : ""} to="/home">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "underline" : ""} to="/products">Products</NavLink>
        <NavLink className={({isActive}) => isActive ? "underline" : ""} to="/last-search">Last Search</NavLink>
     </div>

    </div>
  );
};

export default Navbar;