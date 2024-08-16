import React from 'react';

import logo from '../pics/logo.png';
import { useNavigate } from 'react-router-dom';

import './header.css';

function WebHeader({title, quote}) {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <div class='header-container'>
        <div class='title'>{title}</div>
        <div class='quote'>"{quote}"</div>
      </div>
      <div className='nav-bar'>
      <img src={logo} className="logo" alt="self" onClick = {() => navigate("/")}/>
        <div class='nav-buttons'>
          <button className='nav-button' onClick = {() => navigate("/")} >Home</button>
          <button className='nav-button' onClick = {() => navigate("/projects")}>Projects</button>
          <button className='nav-button' onClick = {() => navigate("/experience")}>Experience</button>
          <button className='nav-button' onClick = {() => navigate("/education")}>Education</button>
          <button className='nav-button' onClick = {() => navigate("/about")}>About Me</button>
        </div>
      </div>
    </header>   
  );
}

export default WebHeader;