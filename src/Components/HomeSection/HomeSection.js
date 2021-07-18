import React from 'react'
import "../../Styles/Main.css"
import "./HomeSection.css"
import DevImage from '../../assets/img/vector/dev-vector.svg'

const HomeSection = () => {
    return (
        <section className='homeSection' id='homeSection'>
            <div className='homeText'>
                <h1 className='homeTitle'>
                    Beginner / FullStack Developer
                </h1>
                <span>
                    Student of Information Systems, immersed in the world of technology since 2020..
                </span>
                <a href='/' className='primaryButton'>
                    Know More ;)
                </a>
            </div>
            <div className='homeImage'>
                <div className='imageWrapper'>
                    <img src={DevImage} className='devImage' alt='Imagem Developer'></img>
                </div>
            </div>
      </section>
    )
}

export default HomeSection
