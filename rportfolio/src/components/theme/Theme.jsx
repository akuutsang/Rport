import './theme.css';
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.png"

import React from 'react'

export default function Theme() {
  return (
    <div className='Theme'>
        <img src={Sun} alt="" className='ThemeIcon' />
        <img src={Moon} alt="" className='ThemeIcon' />
        <div className="Themebtn">
            <button></button>
        </div>
    </div>
  )
}
