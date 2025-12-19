import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        <div className="about-right">
        
          {/* ===== ABOUT + SKILLS CARDS ===== */}
          <div className="about-card-grid">
            {/* -------- ABOUT CARD -------- */}
            <div className="about-card">
              <h3 className="box-title">Who I Am</h3>

              <div className="about-para">
                <p>
                  I am a recent BCA graduate (2025) with a strong passion for
                  frontend development and building clean, responsive and
                  user-focused web applications. I enjoy working with modern
                  technologies like JavaScript, React, Next.js, and Tailwind CSS
                  to bring ideas to life.
                </p>

                <p>
                  I’ve built real projects such as a To-Do App, Weather App, a
                  Spring Boot-based Food Delivery App, and a MERN Agent
                  Management panel. These projects strengthened my UI
                  development and problem-solving skills.
                </p>

                <p>
                  I’m currently seeking a Frontend Developer internship or
                  entry-level role where I can learn, grow, and contribute.
                </p>
              </div>
            </div>

            {/* -------- SKILLS CARD -------- */}
            <div className="about-card">
              <h3 className="box-title">Skills</h3>

              <div className="skills-section">
                <div className="skill-bar">
                  <span>HTML & CSS</span>
                  <div className="skill-progress">
                    <div style={{ width: "90%" }} />
                  </div>
                </div>

                <div className="skill-bar">
                  <span>JavaScript</span>
                  <div className="skill-progress">
                    <div style={{ width: "75%" }} />
                  </div>
                </div>

                <div className="skill-bar">
                  <span>React JS</span>
                  <div className="skill-progress">
                    <div style={{ width: "70%" }} />
                  </div>
                </div>

                <div className="skill-bar">
                  <span>Next JS</span>
                  <div className="skill-progress">
                    <div style={{ width: "60%" }} />
                  </div>
                </div>

                <div className="skill-bar">
                  <span>Tailwind CSS</span>
                  <div className="skill-progress">
                    <div style={{ width: "80%" }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Experience card */}
            <div className="exp-box">
                  {" "}
                  <h3 className="box-title">Experience</h3>{" "}
                  <div className="exp-item">
                    {" "}
                    <h4>
                      Frontend Developer — Freelance & Personal Projects
                    </h4>{" "}
                    <span className="year">2023 – Present</span>{" "}
                    <ul>
                      {" "}
                      <li>
                        Built real-world projects using React, Next.js &
                        Tailwind CSS.
                      </li>{" "}
                      <li>Developed responsive UI components.</li>{" "}
                      <li>Worked with APIs, auth & state management.</li>{" "}
                      <li>Deployed apps using Vercel & GitHub Pages.</li>{" "}
                    </ul>
                  </div>
                </div>

                {/* Education Card */}
                <div className="edu-box">
                  {" "}
                  <h3 className="box-title">Education</h3>{" "}
                  <div className="edu-item">
                    {" "}
                    <h4>Bachelor of Computer Applications (BCA)</h4>{" "}
                    <span className="year">2022 – 2025</span>{" "}
                    <p className="college">Nrupathunga University , Bangalore</p>{" "}
                    <ul>
                      {" "}
                      <li>
                        Focused on Web Development & Data Structures.
                      </li>{" "}
                      <li>Built full-stack academic projects.</li>{" "}
                      <li>Active in coding & tech communities.</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default About;
