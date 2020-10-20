import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <Fade>
        <div className='footer-content'>
          <div className='footer-madeby'>
            <p className='small-title'>
              <span className='smaller'>
                Made by Tejas Sawant <span className='bluer'>&copy;</span>
                {new Date().getFullYear()}.
              </span>
            </p>
          </div>
          <div className='footer-socials'>
            <a href='https://github.com/tejas456sawant' target='_blank'>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/tejas-sawant-164733192/'>
              <FaLinkedin />
            </a>
            <a href='https://www.instagram.com/_tejas__sawant_'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
