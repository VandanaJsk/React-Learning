import React from 'react';
import './NewNavbar.css';
import { Link } from "react-router-dom";

export default function NewNavbar() {

  return (
    <>
    <div className='newNavbar-wrapper'>
      <h1 className='logo'>LOGO.</h1>
      <div className="container">
      <button className='btn'><Link to="/">Home</Link></button>
        <button className='btn'><Link to="/AboutMe">About Me</Link></button>
        <button className='btn'><Link to="/MyPhone">My Phone</Link></button>
        <button className='btn'><Link to="/MyGame">My Game</Link></button>
      </div>
    </div>
    </>
  )
}
