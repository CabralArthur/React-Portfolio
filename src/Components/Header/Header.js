import React from 'react';
import "../../Styles/Main.css"
import "./Header.css"

const Header = () => {
    return <>
        <header className='header'>
            <span className='name-span'>Arthur<span className='orange-span'>Cabral</span> </span>
            <nav className='header-nav'>
                <ul>
                    <li>
                        <a href='#homeSection'>Home</a>
                    </li>
                    <li>
                        <a href='#aboutSection'>About</a>
                    </li>
                    <li>
                        <a href='#skillsSection'>Skills</a>
                    </li>
                    <li>
                        <a href='#portfolioSection'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#formSection'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}

export default Header;