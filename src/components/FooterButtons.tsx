import React, { useState } from 'react'
import '../css/FooterButtons.css'

function FooterButtons() {

    const [digitales, setDigitales] = useState(true)

    const [noDigitales, setNoDigitales] = useState(false)


  return (
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
  )
}

export default FooterButtons