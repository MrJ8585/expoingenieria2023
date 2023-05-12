import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Proyects.css'
import {useEffect} from 'react'


function Proyects() {

  const navigate = useNavigate()


  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className='proyects-main'>

        <div className='inner-box'>

          <img id='logo-exping' src='https://i.ibb.co/pKkW8d2/expo-logo.png' alt='logo' />


          <p id='main-text'>Conoce ya los proyectos realizados por los alumnos de la Escuela de Ingeniería de <br/> 
              CETYS Ensenada, en las distintas categorías de: Digital, Proceso, Producto y <br/>Aplicación en la Industria.</p>
        
        </div>

        <button onClick={() => {
          navigate('/categories')
        }} id='to-proys'>
          Proyectos
        </button>

    </div>
  )
}

export default Proyects