import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/protfolio/prot-detailsbig.png";
import detailbg1 from "../../assets/img/protfolio/prot-detials2.png";
import detailbg2 from "../../assets/img/protfolio/prot-detials2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const ProtfolioDetails = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    // Get project from URL or use first one
    const projectId = new URLSearchParams(window.location.search).get("id") || 1;
    const project = projectList.find(p => p.id === parseInt(projectId));
    setCurrentProject(project || projectList[0]);
  }, []);

  const openLightbox = (index) => {
    if (currentProject) {
      const images = currentProject.images || [currentProject.image].filter(Boolean);
      setCurrentImages(images);
      setCurrentId(0);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (!currentProject) {
    return <div>Loading...</div>;
  }

  return (
    <>

      <PageHeader
        heading={currentProject.heading}
        page={currentProject.heading}
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          {currentProject.images && currentProject.images.length > 0 && (
            <div
              className="details__bigthumb mb-60"
              data-aos="fade-up"
              data-aos-duration="1000"
              onClick={() => openLightbox(0)}
              style={{ cursor: "pointer" }}
            >
              <img src={currentProject.image} alt="img" />
              <div className="prot__detail__contact">
                <h3>Project Info</h3>
                <div className="prot__itembox">
                  <div className="prot__left">
                    <div className="items mb__cus30">
                      <h5>Project</h5>
                      <p>{currentProject.heading}</p>
                    </div>
                  </div>
                </div>
                <ul className="social d-flex gap-3">
                  {socialIcons.map(({ icon, id, url }) => (
                    <li key={id}>
                      <a href={url} target="_blank" rel="noreferrer">
                        <i>{icon}</i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="details__textwrap">
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="fz-16 pra ttext__one">
                {currentProject.subHeading}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="protfolidetails__section cmn__bg pt-120 pb-120">
        <div className="container">
          <div className="project__head text-center">
            <span
              className="common__sub"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Protfolio
            </span>
            <h2 className="fw-500" data-aos="fade-up" data-aos-duration="1000">
              Related Work
            </h2>
          </div>

          <div className=" project__wrapone">
            {projectList
              .slice(0, 2)
              .map(({ heading, id, image, subHeading, githubUrl }, index) => (
                <ProjectCard
                  key={id}
                  image={image}
                  heading={heading}
                  subHeading={subHeading}
                  githubUrl={githubUrl}
                  openLightbox={openLightbox}
                  index={index}
                  navigate="/protfolio"
                />
              ))}
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={currentImages}
            onClose={closeLightbox}
            currentId={currentId}
          />
        )}
      </section>
    </>
  );
};

export default ProtfolioDetails;
