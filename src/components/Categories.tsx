import React, { useEffect } from 'react'
import '../css/Categories.css'
import FooterButtons from './FooterButtons'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/FooterButtons.css'

function Categories() {

    const navigate = useNavigate()

    const [inUse, setInUse] = useState(0)

    const [digitales, setDigitales] = useState(true)

    const [noDigitales, setNoDigitales] = useState(false)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

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

        {/* Digitales y no digitales */}
        <div className='fb-main'>

            <div className='container'>

                <div className='box'>
                    <p>Digitales</p>
                    <button className={digitales ? 'switch-active' : 'switch'} onClick={() => {
                        if(digitales){
                            setDigitales(false)
                            setNoDigitales(true)
                        }else{
                            setDigitales(true)
                            setNoDigitales(false)
                        }
                    }}>
                        <div className='inner-box'>
                        </div>
                    </button>
                </div>

                <div className='box'>
                    <p>PPA</p>
                    <button className={noDigitales ? 'switch-active' : 'switch'} onClick={() => {
                        if(noDigitales){
                            setNoDigitales(false)
                            setDigitales(true)
                        }else{
                            setNoDigitales(true)
                            setDigitales(false)
                        }
                    }}>
                        <div className='inner-box'>
                        </div>
                    </button>
                </div>

            </div>



        </div>




        <div className={inUse==0 ? 'cat cat1 academica activa' : 'cat cat1 academica'} onClick={() => {
            setInUse(0)

            if(digitales){
                navigate('/#/proyects/1')
            }else{
                navigate('/#/proyects/2')
            }

        }}>
            <div className='left-box'>
                <div className='upper-box'>
                    <span className='top'>Categoría<br/><span className='bottom'>Académica</span></span>
                </div>
                <div className='bottom-box'>
                    <p>1er y 2do Semestre.</p>
                </div>
            </div>

            <div className='right-box'>

            </div>
        </div>


        <div className={inUse==1 ? 'cat cat2 intermedio activa' : 'cat cat2 intermedio'} onClick={() => {
            setInUse(1)

            if(digitales){
                navigate('/#/proyects/3')
            }else{
                navigate('/#/proyects/4')
            }

        }}>
            <div className='left-box'>
            </div>

            <div className='right-box'>
                <div className='upper-box'>
                    <span className='top'>Categoría<br/><span className='bottom'>Intermedio</span></span>
                </div>
                <div className='bottom-box'>
                    <p>3er Semestre en adelante.</p>
                </div>
            </div>
        </div>


        <div className={inUse==2 ? 'cat cat1 avanzado activa' : 'cat cat1 avanzado'} onClick={() => {
            setInUse(2)

            if(digitales){
                navigate('/#/proyects/6')
            }else{
                navigate('/#/proyects/5')
            }

        }}>

            <div className='left-box'>
                <div className='upper-box'>
                    <span className='top'>Categoría<br/><span className='bottom'>Avanzada</span></span>
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