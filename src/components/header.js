import React from 'react';
import './style/header.css';

function Header() {
  return (
    <div className="Header">
        <div className="Nav-Block">
            <div className="Logo">
                A
            </div>
            <div className="Nav">
                <div className="Item"><a>Home</a></div>
                <div className="Item"><a>Docs</a></div>
                <div className="Item"><a>Pricing</a></div>
                <div className="Item"><a>IDE</a></div>
                <div className="Item"><a>Contact Us</a></div>
            </div>
        </div>
    </div>
  );
}

export default Header;
