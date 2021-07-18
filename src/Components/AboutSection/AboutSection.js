import React from 'react'
import "../../Styles/Main.css"
import "./AboutSection.css"
import AboutDevImage from '../../assets/img/vector/about-dev-vector.svg'

const AboutSection = () => {
    return (
        <section className='aboutSection' id='aboutSection'>
            <div className='sectionTitle'>
                <h1 className='aboutTitle'>
                    About Me
                </h1>
                <h3 className='aboutSubtitle'>
                    Know More About Me
                </h3>
            </div>
            <div className='aboutSectionContent'>

                <div className='imageWrapper'>
                    <img src={AboutDevImage} alt='About Section DevImage'></img>
                </div>

                <div className='aboutSectionText'>
                    <span>Graduating in Information Systems at UFRPE, student passionate about technology.</span> 
                    <a className='primaryButton' href='/'>
                        Download My CV <i className="fas fa-download"></i>
                    </a>
                </div>
                
            </div>

        </section>
    )
}

export default AboutSection
