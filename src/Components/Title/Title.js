import React from 'react'
import './Title.css'

const Title = (props) => {
    return (
    <div className='Title'>
        <h1>
            {props.titulo}
        </h1>
        <h3>
            {props.subtitulo}
        </h3>
    </div>
    )
}

export default Title
