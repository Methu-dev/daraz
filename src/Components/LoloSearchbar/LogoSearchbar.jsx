import React from 'react'
import logo from '../../images/logo.png';
import './LogoSearch.css'

function LogoSearchbar() {
  return (
    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <picture className=''>
            <img src={logo} alt=""/>
        </picture>
    </div>
  )
}

export default LogoSearchbar