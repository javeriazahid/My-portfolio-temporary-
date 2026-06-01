import React from "react";

const skillsList = [
  { id: 1, skill: "Python (Programming Language)", percentage: "96%" },
  { id: 2, skill: "Data Preprocessing", percentage: "94%" },
  { id: 3, skill: "Image Processing", percentage: "93%" },
  { id: 4, skill: "AI Integration", percentage: "92%" },
  { id: 5, skill: "Adobe Illustrator", percentage: "90%" },
  { id: 6, skill: "Figma", percentage: "97%" },
  { id: 7, skill: "Canva", percentage: "95%" },
  { id: 8, skill: "MS Word", percentage: "98%" },
  { id: 9, skill: "Excel", percentage: "96%" },
  { id: 10, skill: "PowerPoint (PPT)", percentage: "95%" },
  { id: 11, skill: "LaTeX Report Writing", percentage: "93%" },
  { id: 12, skill: "GitHub", percentage: "98%" },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src="/skills.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
                I work across full stack development, machine learning, data processing, and design tools to deliver polished, production-ready solutions.
                These skills reflect my hands-on experience building intelligent systems and intuitive user experiences.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({id, skill, image, percentage}) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb">
                            {image && <img src={image} alt="img" />}
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
