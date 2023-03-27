import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <header>

        <img id='cetys-logo' src='https://www.cetys.mx/en/wp-content/uploads/2016/11/logo-cetys.png' />

        <div className='right-box'>

            <div className='inner-box'>
                <button><img id='search-icon' src='https://cdn-icons-png.flaticon.com/512/149/149852.png' alt='search-icon'/></button>
                <input id='search-bar'></input>
            </div>

            <button id='log-in'>
                <img id='user-icon' src='https://cdn-icons-png.flaticon.com/512/456/456212.png' alt='user-icon'/>
                Iniciar Sesión
            </button>

        </div>

    </header>
  )
}

export default Header