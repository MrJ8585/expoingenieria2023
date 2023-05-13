import React from 'react'
import '../css/Footer.css'

function Footer() {

    const isMobile = window.innerWidth < 768



  return (
    <footer>
        <div className='container'>

            <div className='upper-content'>

                <div className='title'>
                    <span>Preguntas</span>
                </div>


                <div className='inner-input'>
                    <a href='mailto:carlos.trasvina@cetys.mx,anasilvia.armenta@cetys.mx,carlos.aleman@cetys.mx?'>informacion@expoingenieria.com</a>
                    <button><img id='email-icon' src='https://cdn-icons-png.flaticon.com/512/542/542689.png' alt='email-icon'/></button>
                </div>

            </div>

            <div className='bottom-box'>
                <div className='links'>
                    <a href='https://www.facebook.com/cetysens'><button><img src='https://cdn-icons-png.flaticon.com/512/1384/1384005.png'/></button></a>
                    <a href='https://goo.gl/maps/BtdRuu1PbTcwAReB7'><button><img src='https://i.ibb.co/6RYcK4x/gps.png'/></button></a>
                </div>
                <span>
                    CETYS Ensenada
                </span>
            </div>

        </div>

        <div className='inside-footer'>
            <span>Camino Microondas Trinidad Km. 1 S/N, Las palmas 3ra Sección, Moderna Oeste, 22860 Ensenada, B.C.</span>
        </div>

    </footer>
  )
}

export default Footer