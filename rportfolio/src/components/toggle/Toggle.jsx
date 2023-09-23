import './toggle.css';
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.png"
import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../../components/Context'

export default function Toggle() {
  const theme = useContext(ThemeContext)
  const handleClick = ()=>{
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div className='Toggle'>
        <img src={Sun} alt="" className='ToggleIcon' />
        <img src={Moon} alt="" className='ToggleIcon' />
        <div className="Togglebtn" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}>
        </div>
    </div>
  )
}
