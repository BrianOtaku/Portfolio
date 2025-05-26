import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__logo">WebbyFrames</div>
                <ul className="footer__nav">
                    <li>Eleven</li>
                    <li>Twelve</li>
                    <li>Thirteen</li>
                    <li>Fourteen</li>
                    <li>Fifteen</li>
                    <li>Sixteen</li>
                </ul>
            </div>
            <hr />
            <div className="footer__bottom">
                <span>CompanyName @ 202X. All rights reserved.</span>
                <div className="footer__socials">
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
