import { motion } from "framer-motion";
import BallCanvas from "../canvas/canvas";
import { technologies } from "../langauges/Languages";
import { textVariant } from "../../utils/Motion";
import "./skills.css";
const Skills = () => {
  return (
    <>
      <div className="wrapperContainer">
        <motion.div className="SkillsTitle" variants={textVariant}>
          <p>My skills</p>
        </motion.div>

        <div className="wrapper">
          {technologies.map((technology) => (
            <div className="img" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className="TechName">{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
