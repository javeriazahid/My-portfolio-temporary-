import React, { useEffect } from "react";
import {
  Linkedin,
  Github,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "javeriazahid550@gmail.com",
  },
  
  {
    id: 3,
    system: "Address",
    contact: "Lahore, Pakistan",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
      { icon: <Linkedin />, url: "https://www.linkedin.com/in/javeria-azahid-8464552ab" },
      { icon: <Github />, url: "https://github.com/javeriazahid" },
    ],
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src="/mee.jpeg" alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                I am a Full Stack developer,ML Engineer and Data Scientist passionate about solving real-world problems through intelligent automation and data-driven insights and by creating full stack web applications.
                With expertise in Mern Stack, machine learning, and design, I transform complex challenges into elegant, user-centered solutions.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">
                              {system}
                            </span>
                            <Link to={""}>{contact}</Link>
                            {socalContact && (
                              <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                {socalContact.map((info, index) => (
                                  <li key={index}>
                                    <a href={info.url} target="_blank" rel="noreferrer">{info.icon}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
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

export default AboutMe;
