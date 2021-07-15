import React from 'react'
import "../../Styles/Main.css"
import "./HomeSection.css"
import DevImage from '../../assets/img/vector/dev-vector.svg'

const HomeSection = () => {
    return (
        <div className='container homeSection'>
            <div className='homeText'>
                <h1>
                    Beginner / FullStack
                    Developer.
                </h1>
                <span>
                    Student of Information Systems, immersed in the world of technology since 2020..
                </span>
                <a href='/' className='primaryButton'>Saiba Mais ;)</a>
            </div>
            <div className='homeImage'>
                <img src={DevImage} className='devImage' alt='Imagem Developer'>
                </img>
            </div>
      </div>
    )
}

export default HomeSection
