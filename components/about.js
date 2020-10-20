import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ReactTyped from "react-typed";

const About = () => {
  const getAge = () => {
    const date = new Date();
    const currYear = date.getFullYear();
    const myAge = currYear - 2002;
    return myAge.toString();
  };

  return (
    <section className='about section' id='about'>
      <div className='about-content content'>
        <Fade>
          <h1 className='about-content-title subtitle'>
            <ReactTyped
              loop
              typeSpeed={70}
              backSpeed={70}
              strings={["About Me"]}
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar='_'
            />
          </h1>
          <p className='about-content-description description'>
            Find more about me
          </p>
        </Fade>
        <div className='about-content-container '>
          <Slide bottom>
            <div className='about-main-text'>
              <p className='about-main-text-desc-1 about-main-text-desc filler'>
                Hello! I'm Tejas Sawant, I'm a {getAge()} years old fullstack
                software developer and digital marketer who loves building
                things that live on the web.
                <br />
              </p>
              <p className='about-main-text-desc-2 about-main-text-desc filler'>
                I've always loved tech and ecommerce . My greatest passions are
                technology , programming , trading , designing an advertising
                campaign and ecommerce.
              </p>
              <p className='about-main-text-desc-3 about-main-text-desc filler'>
                My focus is on the development of modern and efficient websites,
                web apps , android apps , marketing services to provide users or
                companies with fully responsive, pixel-perfect interfaces and
                exceptional efficient interaction.
              </p>
            </div>
          </Slide>
          <div className='about-img-container'>
            <a href='https://github.com/tejas456sawant' target='_blank'>
              <Slide bottom>
                <img
                  src='/media/imgs/Me.jpg'
                  style={{ height: "auto", width: "100%" }}
                  className='about-img-container-img'></img>
              </Slide>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
