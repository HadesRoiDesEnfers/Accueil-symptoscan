import React, { useState } from 'react';
import './nav.css';
import { FaHeartbeat, FaStream } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { BiGridAlt, BiStats, BiCog, BiLogOut } from "react-icons/bi";

function NavBar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indiTop, setIndiTop] = useState('14%');

    const handleClick = (index) => {
        setActiveIndex(index);
        let topPosition;
        switch (index) {
            case 1:
                topPosition = '14.5%';
                break;
            case 2:
                topPosition = '27%';
                break;
            case 3:
                topPosition = '37.8%';
                break;
            case 4:
                topPosition = '50.5%';
                break;
            default:
                topPosition = '14%';
        }
        setIndiTop(topPosition);
    };

    return (
        <>
            <div className="logo">
                <p>+</p>
            </div>
            <nav>
                <ul>
                    <li className="burger"><a href="#"><FaStream /></a></li>
                    <li className={`Active ${activeIndex === 1 ? 'Active' : ''}`} onClick={() => handleClick(1)}><a href="#"><BiGridAlt /></a></li>
                    <li className={activeIndex === 2 ? 'Active' : ''} onClick={() => handleClick(2)}><a href="#"><BiStats /></a></li>
                    <li className={activeIndex === 3 ? 'Active' : ''} onClick={() => handleClick(3)}><a href="#"><FaHeartbeat /></a></li>
                    <li className={activeIndex === 4 ? 'Active' : ''} onClick={() => handleClick(4)}><a href="#"><FaCalendar /></a></li>
                    <div className="indi" style={{ top: indiTop }}></div>
                </ul>
                <div className="ambany">
                    <a href="#"><BiCog /></a>
                    <a href="#"><BiLogOut /></a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
