import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="section footer">
            <div className="container">
                <div className="footer-made-by">
                    Made with <img src="images/heart-emoji.png" alt="Love" title="Love"/> by Interlink
                </div>
                <div className="footer-social">
                    <a href="https://twitter.com/interlinklatam" target="_blank" title="Follow us on Twitter!"
                        rel="noopener noreferrer">
                        <img src="images/twitter-logo.png" alt="Twitter"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
