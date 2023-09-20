import "./skillsList.css";
import Skills from '../skills/Skills';




import React from 'react'

function SkillsList() {
  return (
    <div className="SkillsList">
        <div className="SkillsListText">
            <h1 className="SkillsListTitle">What can i do?</h1>
            <p className="SkillsListDes">Life is a school you never graduate from, everyday is an opportunity to learn new things. <br /> I am in the business of learning and getting better at what i do, till the day i die. <br /> The sky is the starting point, the possibilities are limitless</p>
        </div>
        <div className="Lists">
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
        </div>
    </div>
  )
}

export default SkillsList