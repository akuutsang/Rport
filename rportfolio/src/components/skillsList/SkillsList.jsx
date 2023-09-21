import "./skillsList.css";
import  Skills  from "../skills/Skills"
import { skills } from "../../data";

const SkillsList = () => {
  return (
    <div className="SkillsList">
        <div className="SkillsListText">
            <h1 className="SkillsListTitle">What can i do?</h1>
            <p className="SkillsListDes">Life is a school you never graduate from, everyday is an opportunity to learn new things. <br /> I am in the business of learning and getting better at what i do, till the day i die. <br /> The sky is the starting point, the possibilities are limitless <br /> These are some of my works, they are just my starting point</p>
        </div>
        <div className="Lists">
            {skills.map((item) => (
            <Skills key={item.id} img={item.img} link={item.link}/>
            ))}; 
        </div>
    </div>
  );
};

export default SkillsList;