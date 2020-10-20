import Particles from "react-particles-js";
import { particlesConfig } from "../config-public/particles-config";
import Zoom from "react-reveal/Zoom";
import Typed from "react-typed";

const ROLES = [
  "Full Stack Developer",
  "Digital Marketer",
  "Freelancer",
  "Dropshipping",
  "Ecommerce",
  "Trader",
];

const Landing = () => {
  return (
    <div id='landing' className='landing section'>
      <Particles className='particles' params={particlesConfig} />
      <div className='landing-main'>
        <Zoom>
          <h1 className='landing-main-title title'>Tejas Sawant</h1>
          <h3 className='landing-main-subtitle subtitle'>
            <Typed
              loop
              typeSpeed={70}
              backSpeed={70}
              strings={ROLES}
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar='_'
            />
          </h3>
          <p className='landing-main-subtext filler'></p>
          <a className='landing-main-button btn-light' href='#projects'>
            See projects
          </a>
        </Zoom>
      </div>
    </div>
  );
};

export default Landing;
