import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">WebbyFrames</div>
            <nav className="header__nav">
                <ul>
                    <li>Eleven</li>
                    <li>Twelve</li>
                    <li>Thirteen</li>
                    <li>Fourteen</li>
                    <li>Fifteen</li>
                    <li>Sixteen ▼</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
