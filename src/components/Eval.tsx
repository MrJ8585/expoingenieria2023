import React, { useEffect } from 'react'
import {useState} from 'react'
import '../css/Eval.css'
import { useAuth0 } from '@auth0/auth0-react';

interface myProps {
    proy: number;
    category: number;
}

interface catDic {
    [key: number]: string;    
}

function Eval({proy, category}: myProps) {

    const catDic: catDic = {
        1: "Academica Digital",
        2: "Academica PPA",
        3: "Intermedio Digital",
        4: "Intermedio PPA",
        5: "Avanzada Digital",
        6: "Avanazada PPA"
    }

    const {user} =  useAuth0()

    const [evalMode, setEvalMode] = useState(false)

    const [rubrica, setRubrica] = useState<Array<{}>>([])

    const [cat, setCat] = useState<String>('')


    const evalCat = () => {
        setCat(catDic[(category)]);
    };


    const getEval = async () => {

        try {

            let correo = user?.email
        
            let body = JSON.stringify({
                "correo": "juez1@gmail.com"
            })

            let headersList = {
                "Content-Type": "application/json"
            }

            const response = await fetch(`https://expoingenieria.onrender.com/pregunta/${category}`, {
                method: 'GET'
            })

            const data = await response.json()

            setRubrica(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEval()
    }, [])

    useEffect(() => {
        evalCat()
    }, [category])

  return (
    <div className='main-eval'>

        <button className='eval-button' onClick={() => {
            setEvalMode(true)
        }}>Evaluar</button>

        {evalMode ? <div className='eval-form'>

            <div className='form-head'>
                <button onClick={() => {
                    setEvalMode(false)
                }}>
                    Close
                </button>
            </div>

            <div className='title'>
                <h1>Rubrica {cat}</h1>
            </div>

            <form className='main-eval-q'>
                {rubrica.map((rubq:any) => (
                    <div className='eval-maped' key={rubq.idPregunta}>
                        <div className='desc'>
                            {rubq.pregunta}
                        </div>
                        <input type='number' min={0} max={10}></input>
                    </div>  
                ))}

                <div className='enviar'>
                    <button type='submit'>Enviar</button>
                </div>
            </form>

        </div>:null}

    </div>
  )
}

export default Eval