import React, { useEffect, useState } from "react";

import Title from "../Shared/Title/Title";
import Lightbox from "../Shared/LightBox/LightBox";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { projectList } from "../../Utlits/projectList";
import { Link } from "react-router-dom";

const Projects = () => {
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const openLightbox = (index) => {
    const images = projectList[index]?.images || [projectList[index]?.image].filter(Boolean);
    setCurrentImages(images);
    setCurrentId(0);
    setLightboxOpen(true);
  };

  return (
    <section className="project__section pt-120 pb-120" id="projects">
      <div className="container">
        <Title
          mainTitle={"Look at my portfolio and give me your feedback"}
          sortTitle={"Complete Project"}
        />

        <div className={`project__wrapone`}>
          {projectList.map(({ heading, id, image, subHeading, githubUrl }, index) => (
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

        {/* Removed "Click More Work" button */}
      </div>
      {lightboxOpen && (
        <Lightbox
          images={currentImages}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )}
    </section>
  );
};

export default Projects;
