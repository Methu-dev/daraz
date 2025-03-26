import React from 'react'
import logo from '../../images/logo.png';
import './LogoSearch.css'

function LogoSearchbar() {
  return (
    <div className=' flex justify-center items-center mx-auto p-2'>
            <a href="/"><img src={logo} className='w-40' alt="logo images"/></a>
            <input type="text" className='bg-[#f5f5f5] p-1 border-0 outline-0 w-[50%] ml-5 rounded-l-lg' placeholder='Search in daraz' />
            <button className='outline-0 border-0 text-white bg-[#f57224] rounded-[4px] ml-[-5px] p-1'>Search</button>
    </div>
  )
}

export default LogoSearchbar