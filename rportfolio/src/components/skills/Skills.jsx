import "./skills.css"

const Skills = ({img, link}) => {
  return (
    <div className="Skills">
        <div className="window">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="SkillsImg" />
        </a> 
    </div>
  );
};

export default Skills;