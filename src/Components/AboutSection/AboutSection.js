import React from 'react'
import "../../Styles/Main.css"
import "./AboutSection.css"
import AboutDevImage from '../../assets/img/vector/about-dev-vector.svg'

const AboutSection = () => {
    return (
        <section className='aboutSection container'>
            <h2>&lt;About <span className='orange-span'> Me</span> /&gt;</h2>
            <div className='aboutSectionContent'>
                <img src={AboutDevImage}></img>
                <div className='aboutSectionText'>
                    <span>Graduated in Administration, enthusiast in Front-End Development, UX/Design, Photoshop edition, Brand style, landing page Design</span> 
                    <button className='primaryButton'>
                        Download My CV <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
