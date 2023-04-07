import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Sections.css'


function Sections() {

  const navigate = useNavigate()

  return (
    <div className='section-main'>

        <div className='inner-box'>

            <span onClick={() => navigate('/about')}>¿Qué es?</span>
            <span onClick={() => navigate('/categories')}>Proyectos</span>
            <span>Preguntas</span>

        </div>

    </div>
  )
}

export default Sections