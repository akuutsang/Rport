import React from 'react'
import './intro.css'

function Intro() {
  return (
    <div className='intro'>
        <div className="introLeft">
            <div className="name-container">
                <h2 className='welcome'>Welcome to my portfolio! My name is</h2>
                <h1 className='name'>Winnifred Kaze</h1>
                <div className="introTitle">
                    <div className="introTitleContainer">
                        <div className="introTitleItem">Web developer</div>
                        <div className="introTitleItem">Writer</div>
                        <div className="introTitleItem">Wife</div>
                        <div className="introTitleItem">mother</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="introRight">rightt</div>
    </div>
  )
}

export default Intro