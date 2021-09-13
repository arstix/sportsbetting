import React from 'react'
import "./header.css"
import Logo from './images/logo.png'

function Header() {
    const items = ["SPORTSBOOKS", "SPORTS ODDS", "FREE PICKS", "POWER RANKINGS", "BETTING GUIDE", "NEWS"]
    return (
        <div className="header__title">
            <a href="#" className="header__logo">
             <img src={Logo} alt="Logo" className="header__logo--img"/>
             <span className="header__logo--text">CANADA <br />
            SPORTS <br />
            BETTING</span>
            </a>
            <nav className="header__nav">
                <ul className="header__list">
            {items.map((item) => {
                return (
                <li className="header__list--item">
                    <a href="#" className="header__list--link">{item}</a>
                </li>
                )
            })}
            </ul>
            </nav>
        </div>
    )
}

export default Header
