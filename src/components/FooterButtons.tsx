import React, { useState } from 'react'
import '../css/FooterButtons.css'

function FooterButtons() {

    const [digitales, setDigitales] = useState(false)

    const [noDigitales, setNoDigitales] = useState(false)


  return (
    <div className='fb-main'>

        <div className='container'>

            <div className='box'>
                <p>Digitales</p>
                <button className={digitales ? 'switch-active' : 'switch'} onClick={() => {
                    if(digitales){
                        setDigitales(false)
                    }else{
                        setDigitales(true)
                    }
                }}>
                    <div className='inner-box'>
                    </div>
                </button>
            </div>

            <div className='box'>
                <p>No Digitales</p>
                <button className={noDigitales ? 'switch-active' : 'switch'} onClick={() => {
                    if(noDigitales){
                        setNoDigitales(false)
                    }else{
                        setNoDigitales(true)
                    }
                }}>
                    <div className='inner-box'>
                    </div>
                </button>
            </div>

        </div>



    </div>
  )
}

export default FooterButtons