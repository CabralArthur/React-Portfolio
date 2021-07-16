import React from 'react';
import "../../Styles/Main.css"
import "./Header.css"

const Header = () => {
    return <>
        <header className='container header'>
            <span className='name-span'>Arthur<span className='orange-span'>Cabral</span> </span>
            <nav className='header-nav'>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Skills</a>
                    </li>
                    <li>
                        <a href='/'>Projects</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}

export default Header;