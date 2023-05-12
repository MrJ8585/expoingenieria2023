import React from 'react'
import '../css/Info.css'
import { useEffect } from 'react'

function Info() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className='about-section'>

        <div className='inner-content'>

            <p id='upper-title'>¿Qué es?</p>
            <p id='title'>Expo<b>Ingeniería</b></p>

            <p id='content'>Es el evento más importante de la Escuela de Ingeniería, donde los alumnos tienen la <br/>
            oportunidad de demostrar los conocimientos que están aprendiendo en el aula a través de<br/> 
            proyectos de aplicación, con innovación y creatividad resolviendo problemas reales, y eso <br/>
            les genera habilidades que van a aplicar cuando egresen y se inserten al campo laboral.</p>

        </div>

    </div>
  )
}

export default Info