import React from 'react'
import "../../Styles/Main.css"
import "./HomeSection.css"
import DevImage from '../../assets/img/vector/dev-vector.svg'
import Title from '../Title/Title'

const HomeSection = () => {
    return (
        <section className='container homeSection'>
            <div className='homeText'>
                <Title texto='Beginner / FullStack Developer'/>
                <span>
                    Student of Information Systems, immersed in the world of technology since 2020..
                </span>
                <a href='/' className='primaryButton'>
                    Know More ;)
                </a>
            </div>
            <div className='homeImage'>
                <img src={DevImage} className='devImage' alt='Imagem Developer'>
                </img>
            </div>
      </section>
    )
}

export default HomeSection
