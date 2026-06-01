import React from "react";
import { ArrowUpShort } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hello, I'm Javeria Zahid, a Full Stack MERN developer, ML Engineer, Data Scientist and Designer
                  based in Lahore, Pakistan.
                </p>
                <a href="mailto:javeriazahid550@gmail.com" style={{textTransform: 'none'}}>javeriazahid550@gmail.com</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <ul className="list-unstyled d-grid gap-2">
                  
                  <li><a href="mailto:javeriazahid550@gmail.com" className="social__footer" style={{textTransform: 'none'}}>javeriazahid550@gmail.com</a></li>
                  <li><a href="https://www.linkedin.com/in/javeria-azahid-8464552ab" target="_blank" rel="noreferrer" className="social__footer">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2023 {" "}
              <Link to={"/"} className="base">
                Javeria Zahid.
              </Link>{" "}
              All rights reserved.
            </p>
           
            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
