import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Proyects.css'


function Proyects() {

  const navigate = useNavigate()


  return (
    <div className='proyects-main'>

        <div className='inner-box'>

          <img id='logo-exping' src='https://s3-alpha-sig.figma.com/img/020f/ee11/355e69c9b28c751a6766b926fd9f67f2?Expires=1681689600&Signature=hlc00KyDz9b7pT4p1FZ9AHu3eOFPB0EsAsMBsYKNNP1sn2fO9zjgBDUTV2tdxaWFf4a1tH9cppv2BjVcWziOWC8HNbpQ8G48B6awenRYRTKZyd3VA1p9uCNd200D4BdcuBKIrekvZ9w-AdSSodqBdpLgfZwhhGWT1gNiJL2rA12bm8-dWkECqLldpaFkyXgOMYJ5ZpB6qzAWBqA9rz5nRhhobb2LQzV6nIetHOf8vnK28w6YguHEmYupUMV-eU7hzaLSi4WV5aoFD3kr9i3IzQLV-IWjehJ2JEDdjHBDuotYfXiBRA7GKrACF12A2zLMVndNZwNCRtuG2Z382TK7dQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='logo' />


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