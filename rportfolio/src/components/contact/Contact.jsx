import './contact.css';
import phone from '../../images/phoneIcon.jpeg'
import email from '../../images/emailIcon.jpeg'
import home from '../../images/locationIcon.png'
import emailjs from '@emailjs/browser';
import { useState } from "react";
import React from 'react'
import { useRef } from 'react';
import { ThemeContext } from "../Context";
import { useContext } from "react";

export default function Contact() {
    const formRef = useRef();
    const [sent, setSend] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_wwtmpqk', 'template_aoeqff8', formRef.current, 'rUp39nMkjqgJnjWd0')
      .then((result) => {
          console.log(result.text);
          setSend(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  const theme = useContext (ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className='Contact'>
        <div className="ContactBg"></div>
        <div className="ContactContainer">
            <div className="ContactLeft">
                <div className="ContactTitle">
                    <h1>Let's talk about your project</h1>
                </div>    
                <div className="ContactInfo">
                    <div className="ContactInfoItem">
                        <img  src={phone} alt="" className='ContactIcon' />
                          +234-8138234134
                </div>    
                <div className="ContactInfoItem">
                <img  src={email} alt="" className='ContactIcon' />
                        akuutsang@gmail.com   
                </div>
                <div className="ContactInfoItem">
                    <img  src={home} alt="" className='ContactIcon' />
                        Lagos || Nigeria
                </div>
            </div>
            
        </div>
        <div className="ContactRight">
                <p className="ContactDes">
                    Hire me today! <br /> Be a part of my story
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor:darkMode && "#333" }} type="text" placeholder='User-name' name='user_name' />
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Email' name='user_mail' />
                    <textarea style={{backgroundColor:darkMode && "#333"}} name='message' placeholder='Message' rows='5'></textarea>
                    <button className='btn'>Submit</button>
                    {sent && "message sent"}
                </form>
        </div>
    </div>
    </div>
  )
}
