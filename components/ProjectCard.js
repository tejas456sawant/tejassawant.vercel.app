import React from "react";
import Zoom from "react-reveal/Zoom";
import { BiWorld } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({
  imgUrl,
  projectTitle,
  projectShortInfo,
  projectInfo,
  webLink,
  isOpenSource,
  gitLink,
}) => (
  <Zoom>
    <div className='card'>
      <div className='front' style={{ backgroundImage: imgUrl }}>
        <h2 className='proj-title'>{projectTitle}</h2>
        <p>{projectShortInfo}</p>
      </div>
      <div className='back'>
        <div>
          <p>{projectInfo}</p>
          <br />
          <hr />
          <br />
          <a className='button' target='_blank' href={webLink}>
            <BiWorld />
          </a>
          &nbsp;&nbsp;
          {isOpenSource ? (
            <a className='button' target='_blank' href={gitLink}>
              <AiFillGithub />
            </a>
          ) : (
            <>
              <br />
              <br />
              <code>{"[PRIVATE]"}</code>
            </>
          )}
        </div>
      </div>
    </div>
  </Zoom>
);

export default ProjectCard;
