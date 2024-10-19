import React from "react";
import Icon from "@mdi/react";
import { mdiFilePdfBox, mdiGithub, mdiLinkedin, mdiWhatsapp } from "@mdi/js";
import "./SocialLinks.css";
import ReactGA from "react-ga4";

function SocialLinks({ fixed }) {
  const trackSocialLinkClick = (platform) => {
    ReactGA.event({
      category: "Social Link",
      action: `Clicked ${platform}`,
    });
  };

  return (
    <div className={`nav-links-icons ${fixed ? "fixed" : ""}`}>
      <ul className="nav-links">
        <li>
          <a
            href="https://drive.google.com/file/d/1ggzVqkuU30S1yWE6Iw-N2NHcK5Ma4sWf/view?usp=drive_link"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("Resume")}
          >
            <Icon path={mdiFilePdfBox} size={1} color="#FF5722" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Ahmed-bashaa"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("GitHub")}
          >
            <Icon path={mdiGithub} size={1} color="#333333" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ahmed-mahmoud-0b0041273/"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("LinkedIn")}
          >
            <Icon path={mdiLinkedin} size={1} color="#0a66c2" />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+201158604007"
            onClick={() => trackSocialLinkClick("WhatsApp")}
             target="_blank" 
             rel="noreferrer"
          >
            <Icon path={mdiWhatsapp} size={1} color="#25D366" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
