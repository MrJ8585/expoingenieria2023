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
                La ExpoIngenieria cuenta con un sistema que permite <br/> 
                categorizar los proyectos. Esto en dependencia del semestre <br/>
                cursante por los alumnos.
            </p>
        </div>

        <div className='cat1 academica'>
            <div className='left-box'>
                <div className='upper-box'>

                </div>
                <div className='bottom-box'>

                </div>
            </div>

            <div className='right-box'>

            </div>
        </div>


        <div className='cat2 intermedio'>
            <div className='left-box'>

            </div>

            <div className='right-box'>
                <div className='upper-box'>

                </div>
                <div className='bottom-box'>

                </div>
            </div>
        </div>


        <div className='cat1 avanzado'>

            <div className='left-box'>
                <div className='upper-box'>

                </div>
                <div className='bottom-box'>

                </div>
            </div>

            <div className='right-box'>

            </div>
        </div>



    </div>
  )
}

export default Categories