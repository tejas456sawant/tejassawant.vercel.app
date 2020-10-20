import Fade from "react-reveal/Fade";
import Typed from "react-typed";
import SkillCards from "./SkillCards";

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <div className='skills-content content'>
        <Fade>
          <h1 className='skills-content-title subtitle'>
            <Typed
              loop
              typeSpeed={70}
              backSpeed={70}
              strings={["My Skills"]}
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar='_'
            />
          </h1>
          <p className='skills-content-description description'>
            See what I can do
          </p>
        </Fade>
        <SkillCards />
      </div>
    </section>
  );
};

export default Skills;
