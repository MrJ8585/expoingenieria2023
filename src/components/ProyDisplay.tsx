import React, { useEffect } from 'react'
import {useState} from 'react'
import { useParams } from 'react-router-dom'
import '../css/ProyDisplay.css'

import {privUsers} from '../privUsers'
import {Objetivos} from '../objs'
import { useAuth0 } from '@auth0/auth0-react'
import Eval from './Eval'

type SelectedProy = Record<string, any>;


function ProyDisplay() {


    const {user} = useAuth0()

    const authUserEmail = user?.email ?? 'unverified'

    const [verified, setVerified] = useState(false)
    

    const verifyPrivs = () => {
        if(authUserEmail != 'unverified'){
            if(privUsers.includes(authUserEmail)){
                setVerified(true)
            }else{
                setVerified(false)
            }
        }else{ 
            setVerified(false)
        }  
    }

    
    const NombreEquipo = 'xxxxxxxx'

    const [proyDisplay, setProyDisplay] = useState<Array<{}>>([])

    const params = useParams()

    const [selectedProy, setSelectedProy] = useState<SelectedProy>({
        idProyecto: 0,
        nombre: "",
        desc: "",
        video: "",
        categoria: "",
        objetivo: []
    })

    const proyectsDummy = [
        {
          idProyecto: 1,
          nombre: "BiblioBot",
          desc: "Un asistente virtual para bibliotecas que ayuda a los usuarios a encontrar y reservar libros",
          video: "https://youtube/url",
          categoria: "1",
          objetivo: "1,2,4,7",
          digital: '1'
        },
        {
          idProyecto: 2,
          nombre: "EcoGarden",
          desc: "Una aplicación para aprender a cultivar plantas en casa y cuidar el medio ambiente",
          video: "https://youtube/url",
          categoria: "1",
          objetivo: "3,6,9,12",
          digital: '1'
        },
        {
          idProyecto: 3,
          nombre: "CleanOcean",
          desc: "Un proyecto de limpieza de playas y océanos utilizando drones y tecnología de recolección",
          video: "https://youtube/url",
          categoria: "1",
          objetivo: "14,15",
          digital: '0'
        },
        {
          idProyecto: 4,
          nombre: "GreenCity",
          desc: "Una aplicación para encontrar y compartir información sobre espacios verdes en la ciudad",
          video: "https://youtube/url",
          categoria: "2",
          objetivo: "11,13,16",
          digital: '1'
        },
        {
          idProyecto: 5,
          nombre: "HealthTech",
          desc: "Una plataforma de telemedicina para conectar pacientes y médicos en tiempo real",
          video: "https://youtube/url",
          categoria: "2",
          objetivo: "3,4,9,16",
          digital: '1'
        },
        {
          idProyecto: 6,
          nombre: "RenewEnergy",
          desc: "Un proyecto de energía renovable para generar electricidad a partir de la fuerza del agua",
          video: "https://youtube/url",
          categoria: "2",
          objetivo: "7,9,13,15",
          digital: '0'
        },
        {
          idProyecto: 7,
          nombre: "SmartMobility",
          desc: "Una plataforma de movilidad inteligente para conectar a los usuarios con diferentes opciones de transporte",
          video: "https://youtube/url",
          categoria: "3",
          objetivo: "9,11,12,13,17",
          digital: '1'
        },
        {
          idProyecto: 8,
          nombre: "EduTech",
          desc: "Una plataforma de aprendizaje en línea para mejorar la educación en áreas rurales y remotas",
          video: "https://youtube/url",
          categoria: "3",
          objetivo: "4,6,9,10",
          digital: '1'
        },
        {
          idProyecto: 9,
          nombre: "WaterGenius",
          desc: "Un proyecto para reducir el consumo de agua en hogares y empresas mediante el uso de sensores y tecnología",
          video: "https://youtube/url",
          categoria: "3",
          objetivo: "6,12,14,15",
          digital: '1'
        },
      ];
      


    const updateProys = () => {

        const id = params.cat_id!
        const paramsDigital = params.digitales!

        const dummy = proyectsDummy.filter((x) => x.categoria == id )

        const dummy2ndFilter = dummy.filter((x) => x.digital == paramsDigital)
        setProyDisplay(dummy2ndFilter)

        if(dummy2ndFilter.length > 0){
            setSelectedProy({
                idProyecto: dummy2ndFilter[0].idProyecto,
                nombre: dummy2ndFilter[0].nombre,
                desc: dummy2ndFilter[0].desc,
                video: dummy2ndFilter[0].video,
                categoria: dummy2ndFilter[0].categoria,
                objetivo: dummy2ndFilter[0].objetivo
            })
        }

    }


    const ifSelected = (obj:any) => {
        if(obj.idProyecto == selectedProy.idProyecto){
            return true
        } else {
            return false
        }
    }

    const objsCheck = (x:any):boolean => {
        return selectedProy.objetivo.includes(x);
    }

    useEffect(() => {
        updateProys()
        verifyPrivs()
    }, [])


    const [objDisplay, setObjDisplay] = useState('')

    const handelHover = (obj:any) => {
        setObjDisplay(obj)
    }

    const handleHoverLeave = () => {
        setObjDisplay('')
    }


  return (
    <div className='main-proydisplay'>
        <div><h1 id='title'>Proyectos</h1></div>

        <div className='main-scroll'>

            <div className='scroll-proys'>

            {proyDisplay.map((x:any) => {
                return (<div key={x.idProyecto} className={ifSelected(x) ? 'selected-proy-scroll' : 'maped-proy'} onClick={() => {
                    setSelectedProy({
                            idProyecto: x.idProyecto,
                            nombre: x.nombre,
                            desc: x.desc,
                            video: x.video,
                            categoria: x.categoria,
                            objetivo: x.objetivo
                        })
                }}>
                    <h2 key={x.idProyecto}>{x.nombre}</h2>
                </div>)
            })}

            </div>

        </div>


        <div className='selected-proy'>

            <div className='upper-box'>

                <div className='inner-left'>

                    {/* <button>Button</button> */}

                </div>
                <div className='inner-middle'>

                    <div className='inner-left-box'>

                        <h2>{selectedProy.nombre}</h2>
                        <h2>{NombreEquipo}</h2>

                        <div className='links'>
                            <button></button>
                            <button></button>
                        </div>

                    </div>
                    <div className='inner-right-box'>
                        <p>{selectedProy.desc}</p>
                    </div>

                </div>
                <div className='inner-right'>

                </div>


            </div>

            <div className='main-objs'>

                <div className='objs'>


                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo1)} onMouseLeave={handleHoverLeave} className={objsCheck(1) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/h1hrxGj/Vector.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo2)} onMouseLeave={handleHoverLeave} className={objsCheck(2) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/gd2jZr3/Vector-1.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo3)} onMouseLeave={handleHoverLeave} className={objsCheck(3) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/qNw6D1j/Vector-3.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo4)} onMouseLeave={handleHoverLeave} className={objsCheck(4) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/0MXtDb0/Vector-4.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo5)} onMouseLeave={handleHoverLeave} className={objsCheck(5) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/rtTX4mz/Vector-5.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo7)} onMouseLeave={handleHoverLeave} className={objsCheck(6) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/7ryQd7b/Vector-6.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo8)} onMouseLeave={handleHoverLeave} className={objsCheck(7) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/ns1RKH1/Vector-7.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo9)} onMouseLeave={handleHoverLeave} className={objsCheck(8) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/R41zxrL/Vector-8.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo10)} onMouseLeave={handleHoverLeave} className={objsCheck(9) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/7kLnqJG/Vector-11.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo11)} onMouseLeave={handleHoverLeave} className={objsCheck(10) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/XYhL00z/Vector-12.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo13)} onMouseLeave={handleHoverLeave} className={objsCheck(11) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/9cpJJsm/Vector-13.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo14)} onMouseLeave={handleHoverLeave} className={objsCheck(12) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/vzT2DCp/Vector-14.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo15)} onMouseLeave={handleHoverLeave} className={objsCheck(13) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/XSsMvsY/Vector-15.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo16)} onMouseLeave={handleHoverLeave} className={objsCheck(14) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/r2fp8pY/Vector-16.png'/></div>
                    <div onMouseEnter={() => handelHover(Objetivos.Objetivo17)} onMouseLeave={handleHoverLeave} className={objsCheck(15) ? 'obj' : 'obj-unactive'}><img style={{height: '45px'}} src='https://i.ibb.co/ftD4wsf/Vector-17.png'/></div>


                </div>

            </div>

            <div className='bottom-desc'>
                <div className='inner-bottom-desc'>
                    <p>
                        {objDisplay}
                    </p>
                </div>
            </div>


        </div>

        {verified ? <div>
            <Eval proy={selectedProy.idProyecto}/>
        </div>: null}





    </div>
  )
}

export default ProyDisplay