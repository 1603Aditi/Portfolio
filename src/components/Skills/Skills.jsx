import React from "react";
import "./Skills.css";

const skillsData = {
  "Frontend": ["HTML", "CSS", "React","Bootstrap"],
  "Backend": ["Node.js", "MongoDB", "SQL","Express.js","REST API",],
  "Programming": ["C++","JavaScript", "C","Basics of Python"],
  "Tools & Others": ["Git & GitHub", "VS Code", "Postman", ]
};

const Skills = () => {
  return (
    <div className="skills" id="skills">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div className="skills-category" key={category}>
          <h3>{category}</h3>
          <div className="skills-container">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
