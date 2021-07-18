import React from 'react'
import '../../Styles/Main.css'
import '../FormSection/FormSection.css'

const FormSection = () => {
    return (
        <>   
        <div id="dialogoverlay">
            <div id="dialogbox" class="card"></div>
        </div>
        <div className='formSection' id='formSection'>
            <div className='sectionTitle'>
                <h1 className='formTitle'>
                    Contact
                </h1>
                <h3 className='formSubtitle'>
                    Talk with me
                </h3>
            </div>
            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="38b5f05a-8ceb-483f-ac4c-182abc838bc5"/>
                <input type="text" name="name" placeholder='Nome...' required/> 
                <input type="text" name="subject" placeholder='Assunto...' required/> 
                <input type="email" name="email" placeholder='Informe Seu E-mail...' required/>
                <textarea name="message" placeholder='Sua Mensagem' required></textarea>
                <input type="hidden" name="redirectTo" value="http:localhost:3000"></input>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
        </>
    )
}

export default FormSection
