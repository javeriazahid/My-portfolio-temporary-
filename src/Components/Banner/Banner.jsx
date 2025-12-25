import React from "react";
import { Link } from "react-router-dom";

import { Linkedin, Github } from "react-bootstrap-icons";

import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";

const socalIcon = [
  {
    id: 1,
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/ayesha-gul-8464552ab",
  },
  {
    id: 2,
    icon: <Github />,
    url: "https://github.com/aayesha-gul",
  },
];
const Banner = () => {


  return (
    <section id="home" style={{backgroundImage: `url('/background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">
                  Currently available for freelance
                </span>
                <span className="d-flex gap-4 align-items-center">
                  worldwide
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
              <h1>
                <span className="hone"> ML Engineer /</span>
                <span className="d-block designers" data-text="Data Scientist">
                  Data Scientist
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
          
        </div>
        <div className="right__infoscroll">
          <Link className="scroll">
            scroll down
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link className="scroll">
            scroll down
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
