import React from "react";

const Education = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src="/education.jpg" alt="Education / graduation" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
                I have pursued a strong educational foundation in computer science and technology. My academic journey spans from secondary education through university, where I've focused on building expertise in machine learning, data science, and design principles that drive my professional work today.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2017-2019</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Matric</h4>
                    <p className="fz-18 pra d-block">KIPS SCHOOL Lahore</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2019-2021</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">FSC</h4>
                    <p className="fz-18 pra d-block">KIPS College for Girls Lahore</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2022-2026</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">BSCS</h4>
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

export default Education;
