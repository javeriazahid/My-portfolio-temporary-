import React from "react";

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src="/work.jpg" alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
                I focus on practical, real-world problem solving across AI, computer vision, and product design.
                My recent work includes mentoring peers and delivering freelance projects with production-quality results.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2024 – Onward</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Freelancing</h4>
                    <p className="fz-18 pra d-block">ML, Data Science & Design Projects</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2025 – Onward</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Computer Vision Peer Tutor</h4>
                    <p className="fz-18 pra d-block">University of Management and Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
