import React from 'react';  
import { Link } from "react-router-dom";
const Footer = () => { 
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-primary text-center">
      <Link className="navbar-brand " to="#">
        <small className="">© SPIRITHACODESH - All Rights Reserved - {new Date().getFullYear()}</small>
      </Link>
    </nav>)
}  
export default Footer 
