import React from "react";
import "./About.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import exhaustedMan from "../../assets/c8130fab-b5ed-4c2b-a180-2e2612eecce3.jpg";
import SocialLinks from "../SocialLinks/SocialLinks";
import Resume from "../../assets/CV_Ahmed_Mahmoud_Basha.pdf";
import ReactGA from "react-ga4";

const About = () => {
  const trackDownloadResume = () => {
    ReactGA.event({
      category: "Download",
      action: "Download Resume",
    });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader title="About Me" />
        <div className="about-content">
          <div className="about-content-img" data-aos="fade-right">
            <img src={exhaustedMan} alt="Exhausted" />
          </div>
          <div className="about-content-text" data-aos="fade-left">
            <h3 className="about-content-header">Who I Am?</h3>
            <br />

            <p>
              Hey there! I'm <span className="about-name">Ahmed Mahmoud</span>,
              a passionate Web Developer based in Cairo. 
              with a specialization in front-end development and back end development. 
              My journey into the tech world has been exciting, and I'm enthusiastic about
              leveraging my skills to contribute to impactful projects.
            </p>
            <br />
            <p>
              Proficient in HTML5, CSS3, and JavaScript, I'm well-versed in
              front-end technologies and frameworks like React.
              Webpack, and Bootstrap, among others. I also have a
              solid understanding of back-end technologies like Node.js,
              MongoDB, and Express.js.
            </p>
            <br />

            <p>
              Outside of work, I enjoy diving into new projects and continuously
              expanding my knowledge. From developing responsive dashboards to
              crafting JavaScript-based interactive projects, I thrive on
              challenges that push me to improve my problem-solving skills and
              enhance my expertise.
            </p>
            <SocialLinks />
            <div className="resume-btn">
              <a
                className="btn"
                href={Resume}
                download="Resume"
                onClick={trackDownloadResume}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
