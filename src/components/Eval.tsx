import React from 'react'
import {useState} from 'react'

interface myProps {
    proy: number;
}

function Eval({proy}: myProps) {

    const [evalMode, setEvalMode] = useState(false)

    const [rubrica, setRubrica] = useState({
        
    })

  return (
    <div className='main-eval'>

        <button className='eval-button' onClick={() => {
            setEvalMode(true)
        }}>Evaluar</button>

        {evalMode ? <div className='eval-form'>
            You are evaluating now!
        </div>:null}

    </div>
  )
}

export default Eval