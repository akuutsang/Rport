import './toggle.css';
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.png"

import React from 'react'

export default function Toggle() {
  return (
    <div className='Toggle'>
        <img src={Sun} alt="" className='ToggleIcon' />
        <img src={Moon} alt="" className='ToggleIcon' />
        <div className="Togglebtn">
        </div>
    </div>
  )
}
