import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,

  SiFigma,
  SiPostman,
  SiNpm,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-title">Skills & Tools</h1>

      <div className="skills-grid">

        <div className="skill-card">
          <SiHtml5 />
          <span>HTML</span>
        </div>

        <div className="skill-card">
          <SiCss3 />
          <span>CSS</span>
        </div>

        <div className="skill-card">
          <SiJavascript />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <SiReact />
          <span>React</span>
        </div>

        <div className="skill-card">
          <SiRedux />
          <span>Redux</span>
        </div>

        <div className="skill-card">
          <SiNextdotjs />
          <span>Next.js</span>
        </div>

        <div className="skill-card">
          <SiTailwindcss />
          <span>Tailwind CSS</span>
        </div>

        <div className="skill-card">
          <SiNodedotjs />
          <span>Node.js</span>
        </div>

        <div className="skill-card">
          <SiExpress />
          <span>Express.js</span>
        </div>

        <div className="skill-card">
          <SiMongodb />
          <span>MongoDB</span>
        </div>

        <div className="skill-card">
          <SiGit />
          <span>Git</span>
        </div>

        <div className="skill-card">
          <SiGithub />
          <span>GitHub</span>
        </div>

        <div className="skill-card">
          <SiVercel />
          <span>Vercel</span>
        </div>

        <div className="skill-card">
          <DiVisualstudio />
          <span>VS Code</span>
        </div>

        <div className="skill-card">
          <SiFigma />
          <span>Figma</span>
        </div>

        <div className="skill-card">
          <SiPostman />
          <span>Postman</span>
        </div>

        <div className="skill-card">
          <SiNpm />
          <span>npm</span>
        </div>

      </div>
    </div>
  );
};

export default Skills;
