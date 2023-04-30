import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Proyects.css'


function Proyects() {

  const navigate = useNavigate()


  return (
    <div className='proyects-main'>

        <div className='inner-box'>

          <img id='logo-exping' src='https://s3-alpha-sig.figma.com/img/020f/ee11/355e69c9b28c751a6766b926fd9f67f2?Expires=1682899200&Signature=Yb6vbpgL2pQ69GiFsX0jgICyV-LxhO2QImY9r23TwdMVHhMAJBiFTtjPcxXH1jWD-JLhZAO3UYsz6P9KtHBuBq2Ll1~AUpEs4YI2eHup~2kdXlvewnBovT5MqYZ7hRpHpFT78C4BXAYAi0lJOw7mjvhi7kZQ3o2j5VVU~d0yM~oOD9yanU9tCgeiH6u7mWsb94z40xyiHJRTKrKH-IRUNeUZ0N32~5inYKWxaBGiOPhlEFHLjdGap~YSNMcAa3JFzw50Y7X~mcdMM14s-wlu6qpuk1yO8YAqe3qgYv49Bm0VAecV3fTjXJ8mxJKY39U27ThUc~ckWqhlGG3~vARNzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='logo' />


          <p id='main-text'>Conoce ya los proyectos realizados por los alumnos de la Escuela de Ingeniería de <br/> 
              CETYS Ensenada, en las distintas categorías de: Software y Multimedia, Proceso y Producto y <br/>Aplicación en la Industria.</p>
        
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