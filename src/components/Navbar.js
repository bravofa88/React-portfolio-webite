import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Navigation = () => {
    return (
        <nav className="nav ">
            <div className="grid">
                <h1 onClick={() => scroll.scrollToTop()}>FABIAN BRAVO</h1>
                <ul>
                    <li onClick={() => scroll.scrollToTop()}>
                        <a href="#heroBanner" >Home</a>
                    </li>
                    <li onClick={() => scroll.scrollTo(370)}>
                        <a href="#about">About</a>
                    </li>
                    <li onClick={() => scroll.scrollTo(990)}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li onClick={() => scroll.scrollTo(1500)}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navigation;