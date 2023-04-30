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
                    <input id='email' placeholder='Contáctanos'></input>
                    <button><img id='email-icon' src='https://cdn-icons-png.flaticon.com/512/542/542689.png' alt='email-icon'/></button>
                </div>

            </div>

            <div className='bottom-box'>
                <div className='links'>
                    <button><img src='https://cdn-icons-png.flaticon.com/512/1384/1384005.png'/></button>
                    <button><img src='https://cdn-icons-png.flaticon.com/512/10110/10110386.png'/></button>
                    <button><img src='https://cdn-icons-png.flaticon.com/512/6244/6244438.png'/></button>
                    <button><img src='https://cdn-icons-png.flaticon.com/512/3669/3669688.png'/></button>
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