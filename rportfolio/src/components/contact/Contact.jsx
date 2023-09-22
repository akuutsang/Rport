import './contact.css';
import phone from '../../images/phoneIcon.jpeg'
import email from '../../images/emailIcon.jpeg'
import home from '../../images/locationIcon.png'

import React from 'react'

export default function Contact() {
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
                        Lagos||Nigeria
                </div>
            </div>
            
        </div>
        <div className="ContactRight">
                <p className="ContactDes">
                    Hire me today! <br /> Be a part of my story
                </p>
                <form>
                    <input type="text" placeholder='user_name' />
                    <input type="text" placeholder='user_subject' />
                    <input type="text" placeholder='user_email' />
                    <textarea name=""placeholder='Message' rows="5"></textarea>
                    <button className='btn'>Submit</button>
                </form>
        </div>
    </div>
    </div>
  )
}
