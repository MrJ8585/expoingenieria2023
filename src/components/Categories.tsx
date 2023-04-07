import React from 'react'
import '../css/Categories.css'

function Categories() {

  return (
    <div className='categories-main'>
        <div id='title'>
            <span>Categorías</span>
        </div>
        
        <div className='description'>
            <p>
                La <b>ExpoIngenieria</b> cuenta con un sistema que permite <br/> 
                <b>categorizar</b> los proyectos. Esto en dependencia del semestre <br/>
                cursante por los alumnos.
            </p>
        </div>

        <div className='cat cat1 academica'>
            <div className='left-box'>
                <div className='upper-box'>
                    <span>Categoría<br/>Académica</span>
                </div>
                <div className='bottom-box'>
                    <p>1er y 2do Semestre.</p>
                </div>
            </div>

            <div className='right-box'>

            </div>
        </div>


        <div className='cat cat2 intermedio'>
            <div className='left-box'>

            </div>

            <div className='right-box'>
                <div className='upper-box'>
                    <span style={{color:'white'}}>Categoría<br/><span style={{color:'#614600'}}>Intermedio</span></span>
                </div>
                <div className='bottom-box'>
                    <p>3er Semestre en adelante.</p>
                </div>
            </div>
        </div>


        <div className='cat cat1 avanzado'>

            <div className='left-box'>
                <div className='upper-box'>
                    <span>Categoría<br/>Avanzada</span>
                </div>
                <div className='bottom-box'>
                    <p>Proyectos aplicados o prototipos de<br/>alta fidelidad.</p>
                </div>
            </div>

            <div className='right-box'>

            </div>
        </div>



    </div>
  )
}

export default Categories