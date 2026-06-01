import React from "react";

const Experience = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src="/work.jpg" alt="Work experience illustration" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
                I completed a 3-month internship at UDEVS (remote), where I worked on MERN stack e-commerce projects and built practical web applications.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">03 Months</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Internship at UDEVS</h4>
                    <p className="fz-18 pra d-block">Remote internship focused on MERN stack development</p>
                    <ul className="mt-3">
                      <li>Developed MERN stack e-commerce projects such as shoe marketplace and bucket list apps.</li>
                      <li>Used Express.js for the Node.js backend.</li>
                      <li>Built the frontend with React.js, HTML, CSS3, and Tailwind CSS.</li>
                      <li>Implemented JWT for authentication and authorization.</li>
                      <li>Used PostgreSQL for the database and pgAdmin as the management tool.</li>
                      <li>Deployed projects using Vercel and managed code on GitHub.</li>
                      <li>Worked in Visual Studio Code as the primary IDE.</li>
                    </ul>
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
