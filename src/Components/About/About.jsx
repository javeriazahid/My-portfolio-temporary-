import React, { useEffect, useState } from "react";

import sectionStar from "../../assets/img/about/section-star.png";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

import AOS from "aos";
import "aos/dist/aos.css";

const tabList = [
  {
    id: 1,
    name: "About",
    value: "about",
  },
  {
    id: 2,
    name: "Experience",
    value: "experience",
  },
  {
    id: 3,
    name: "Education",
    value: "education",
  },
  {
    id: 4,
    name: "Skills",
    value: "skills",
  },
];

const About = () => {
  const [isTabActive, setIsTabAative] = useState("about");
  
  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick = (e) => {
    setIsTabAative(e);
  };

  return (
    <>
      <section className="about__section pt-120 pb-120" id="about">
        <div className="container">
          <div className="personal__head text-center">
            <img
              src={sectionStar}
              className="mb-30"
              alt="star"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <p className="descrp" data-aos="fade-up" data-aos-duration="1500">
              I'm Javeria Zahid, a Full Stack developer, ML Engineer and Data Scientist passionate about solving real-world problems through intelligent automation and data-driven insights and by creating full stack web applications. With expertise in Mern Stack, machine learning, and design, I transform complex challenges into elegant, user-centered solutions.
            </p>
          </div>
          <div className="singletab">
            <ul className="tablinks">
              {tabList.map(({ id, name, value }) => (
                <li
                  key={id}
                  className={`nav-links ${isTabActive === value ? "active" : ""} `}
                >
                  <button onClick={() => handleTabClick(value)} className="tablink">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tabcontents">
              <AboutMe isTabActive={isTabActive} />
              <Experience isTabActive={isTabActive} />
              <Education isTabActive={isTabActive} />
              <Skills isTabActive={isTabActive} />
            </div>
          </div>
        </div>
      </section>
      {/* <Awards /> */}
    </>
  );
};

export default About;
