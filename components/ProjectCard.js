/** @format */

import React from "react";
import Zoom from "react-reveal/Zoom";

const ProjectCard = ({
  imgUrl,
  projectTitle,
  projectShortInfo,
  projectInfo,
  buttonTitle,
}) => (
  <Zoom>
    <a className='card' href='#!'>
      <div className='front' style={{ backgroundImage: imgUrl }}>
        <h2 className='proj-title'>{projectTitle}</h2>
        <p>{projectShortInfo}</p>
      </div>
      <div className='back'>
        <div>
          <p>{projectInfo}</p>
          <button className='button'>{buttonTitle}</button>
        </div>
      </div>
    </a>
  </Zoom>
);

export default ProjectCard;
