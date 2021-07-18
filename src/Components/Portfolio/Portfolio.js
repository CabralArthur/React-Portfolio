import React from 'react'
import '../../Styles/Main.css'
import './Portfolio.css'

import fisrtCardSource from '../../assets/gif/card-1.gif'
import secondCardSource from '../../assets/gif/card-2.gif'
import thirdCardSource from '../../assets/gif/card-3.gif'
import fourthCardSource from '../../assets/gif/card-4.gif'
import fifthCardSource from '../../assets/gif/card-5.gif'
import sixthCardSource from '../../assets/gif/card-6.gif'


const Portfolio = () => {
    return (
        <section className='portfolioSection' id='portfolioSection'>
            
            <div className='sectionTitle'>
                <h1 className='portfolioTitle'>
                    Portfolio
                </h1>
                <h3 className='portfolioSubtitle'>
                    What i done...
                </h3>
            </div>

            <div className='portfolioCards'>
                <div className="cards-list">
                    <div className="card 1">
                        <div className="cardImage"> 
                            <div className="cardTitle title-white">
                                <p>Financiamente</p>
                                <span>Financial maths matter.</span>
                            </div>
                            <a href='https://financiamente.vercel.app/' target='_blank' rel="noopener noreferrer">
                                <img src={fisrtCardSource} alt='Project Gif Card'/> 
                            </a>
                        </div>

                    </div>
                    
                    <div className="card 2">
                        <div className="cardImage"> 
                            <div className="cardTitle title-white">
                                <p>GlassCalc</p>
                                <span>Calc done with glassmorphism style.</span>
                            </div>
                            <a href='https://glass-calc.vercel.app/' target='_blank' rel="noopener noreferrer">
                                <img src={secondCardSource} alt='Project Gif Card'/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="card 3">
                        <div className="cardImage"> 
                            <div className="cardTitle">
                                <p>Move it</p>
                                <span>Project Done In NLW#4.</span>
                            </div>
                            <a href='https://cabralnlw.vercel.app/' target='_blank' rel="noopener noreferrer">
                                <img src={thirdCardSource} alt='Project Gif Card'/>
                            </a>
                        </div>
                    </div>

                    <div className="card 4">
                        <div className="cardImage"> 
                            <div className="cardTitle title-black">
                                <p>FlexBlog</p>
                                <span>Website done using flex-box attributes.</span>
                            </div>
                            <a href='https://origamid-flex.vercel.app/' target='_blank' rel="noopener noreferrer">
                                <img src={fourthCardSource} alt='Project Gif Card'/>
                            </a>
                        </div>

                    </div>
                    
                    <div className="card 5">
                        <div className="cardImage"> 
                            <div className="cardTitle title-black">
                                <p>WildBeast</p>
                                <span>Website done using grid layout attributes.</span>
                            </div>
                            <a href='https://origamid-grid.vercel.app/' target='_blank' rel="noopener noreferrer">
                                <img src={fifthCardSource} alt='Project Gif Card'/>
                            </a>
                        </div>

                    </div>

                    <div className="card 6">
                        <div className="cardImage"> 
                            <div className="cardTitle title-black">
                                <p>InstaLink</p>
                                <span>Page done to use in my instagram bio.</span>
                            </div>
                            <a href='https://arthurcabral.vercel.app/' target='_blank' rel="noopener noreferrer">
                                <img src={sixthCardSource} alt='Project Gif Card'/>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Portfolio
