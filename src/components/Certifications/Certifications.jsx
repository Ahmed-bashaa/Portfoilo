import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Certification from "./Certification";
import "./Certifications.css";
import cert1 from "../../assets/full stack.jpg";
import cert2 from "../../assets/WhatsApp Image 2024-07-01 at 20.07.41_11273750.jpg";
import cert3 from "../../assets/WhatsApp Image 2024-07-02 at 19.43.41_b72e24a3.jpg";
import cert4 from "../../assets/WhatsApp Image 2024-07-02 at 19.43.42_e7a124d6.jpg";

/*
  we need to pass these data as a props  { img, title, provider, date, link }
*/

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <SectionHeader title="Certifications" />
        <div className="certifications-content">
          <Certification
            img={cert2}
            title={"front end(React)"}
            provider={"Route"}
            date={"27 September 2023"}
          />
          <Certification
            img={cert4}
            title={"back end (Node.js)"}
            provider={"Route"}
            date={"10 October 2022"}
          />
            <Certification
            img={cert3}
            title={"Programming Fundamentals diploma(C++)"}
            provider={"Route"}
            date={"21 February 2023"}
          />
 
          <Certification
            img={cert1}
            title={"Full Stack Web Development"}
            provider={"Route"}
            date={"21 February 2024"}
          />

        </div>
      </div>
    </section>
  );
}

export default Certifications;
