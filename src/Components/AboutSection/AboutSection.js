import React from 'react'
import "../../Styles/Main.css"
import "./AboutSection.css"
import AboutDevImage from '../../assets/img/vector/about-dev-vector.svg'
import Title from '../Title/Title'

const AboutSection = () => {
    return (
        <section className='aboutSection container'>
            <Title titulo='About Me' subtitulo='My introduction'/>
            <div className='aboutSectionContent'>
                <img src={AboutDevImage} alt='About Section DevImage'></img>
                <div className='aboutSectionText'>
                    <span>Graduating in Information Systems at UFRPE, student passionate about technology.</span> 
                    <button className='primaryButton'>
                        Download My CV <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
