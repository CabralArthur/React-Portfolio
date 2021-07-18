import React from 'react'
import "../../Styles/Main.css"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footerSite'>
            <span>Portfolio Arthur Cabral</span>
            <span> Todos os Direitos Reservados &copy; - 2020  </span>
            <span className='iconsFooter'>
                <a>
                    <i className="fab fa-whatsapp-square"></i>
                </a>

                <a>
                    <i className="fas fa-envelope-square"></i>
                </a>
                
                <a>
                    <i className="fab fa-linkedin"></i>
                </a>
            </span>
        </footer>
    )
}

export default Footer
