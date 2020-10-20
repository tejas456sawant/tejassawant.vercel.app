import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import ReactTyped from "react-typed";

const Projects = () => {
  return (
    <section className='cards section' id='projects'>
      <div className='content'>
        <Fade>
          <h1 className='subtitle heading'>
            <ReactTyped
              loop
              typeSpeed={70}
              backSpeed={70}
              strings={["Projects"]}
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar='_'
            />
          </h1>
          <p className='description'>Hover over a project to see more.</p>
        </Fade>
        <ProjectCard
          imgUrl='url(/media/imgs/FullBankDetails.png)'
          projectTitle='FullBankDetails'
          projectShortInfo='Website for searching bank details.'
          projectInfo={`Created using NextJS. Website created for searching bank details.
          fullbankdetails.com
          ifsc.fullbankdetails.com
          micr.fullbankdetails.com
          `}
          webLink='https://fullbankdetails.com'
          isOpenSource={false}
        />
        <ProjectCard
          imgUrl='url(/media/imgs/logo.jpg)'
          projectTitle='Project 1'
          projectShortInfo='Lorem ipsum dolor sit amet.'
          projectInfo='Lorem ipsum dolor sit amet, consectetur adipiscing elit ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          buttonTitle='Click Here'
        />
        <ProjectCard
          imgUrl='url(/media/imgs/logo.jpg)'
          projectTitle='Project 1'
          projectShortInfo='Lorem ipsum dolor sit amet.'
          projectInfo='Lorem ipsum dolor sit amet, consectetur adipiscing elit ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          buttonTitle='Click Here'
        />
        <ProjectCard
          imgUrl='url(/media/imgs/logo.jpg)'
          projectTitle='Project 1'
          projectShortInfo='Lorem ipsum dolor sit amet.'
          projectInfo='Lorem ipsum dolor sit amet, consectetur adipiscing elit ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          buttonTitle='Click Here'
        />
        <ProjectCard
          imgUrl='url(/media/imgs/logo.jpg)'
          projectTitle='Project 1'
          projectShortInfo='Lorem ipsum dolor sit amet.'
          projectInfo='Lorem ipsum dolor sit amet, consectetur adipiscing elit ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          buttonTitle='Click Here'
        />
        <ProjectCard
          imgUrl='url(/media/imgs/test.jpg)'
          projectTitle='Project 1'
          projectShortInfo='Lorem ipsum dolor sit amet.'
          projectInfo='Lorem ipsum dolor sit amet, consectetur adipiscing elit ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          buttonTitle='Click Here'
        />
      </div>
    </section>
  );
};

export default Projects;
