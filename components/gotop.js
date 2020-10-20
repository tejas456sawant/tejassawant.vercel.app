import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const GoTop = () => (
  <div className='go-top'>
    <Fade>
      <a href='#landing' className='go-top-container'>
        <FaArrowUp className='go-top-container-arrow' />
      </a>
    </Fade>
  </div>
);

export default GoTop;
