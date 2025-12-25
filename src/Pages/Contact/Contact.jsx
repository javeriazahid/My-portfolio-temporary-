import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Form from "../../Components/Shared/Form/Form";
import { ScrollRestoration } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <PageHeader
        heading={"Let's Start Something"}
        page={"Let's Start Something"}
      />
      <section className="contact__section">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="contact__box cmn__bg p-5">
                <p className="fz-18 mb-40" style={{lineHeight: '1.8'}}>
                  Currently available for model training, AI integration, data cleaning, web designing, and logo designing. 
                  Feel free to contact me anytime.
                </p>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="contact__item mb-20">
                      <span className="he1 d-block mb-2">Email</span>
                      <a href="mailto:ayeshagul2003@gmail.com" style={{textTransform: 'none', fontSize: '16px'}}>ayeshagul2003@gmail.com</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact__item mb-20">
                      <span className="he1 d-block mb-2">LinkedIn</span>
                      <a href="https://www.linkedin.com/in/ayesha-gul-8464552ab" target="_blank" rel="noreferrer" style={{fontSize: '16px'}}>linkedin.com/in/ayesha-gul-8464552ab</a>
                    </div>
                  </div>
                 
                  <div className="col-md-6">
                    <div className="contact__item">
                      <span className="he1 d-block mb-2">Address</span>
                      <span className="address" style={{fontSize: '16px'}}>Lahore, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Contact;
