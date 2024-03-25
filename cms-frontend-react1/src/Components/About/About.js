import React, { useState } from "react";
import parse from "html-react-parser";
import "./About.css";

export default function About() {
  const [innerhtml, setInnerhtml] = useState(
    "<ul><li>  Club Management System of Indian Institute of Information Technology,  Lucknow (IIIT Lucknow) site is designed for club realted information and  updates on a click.</li><br /><li>  Club Management System provides you with all the clubs indeep and  detailed knowlege and its upcoming events.</li></ul>"
  );
  const about_cms = () => {
    setInnerhtml(
      "<ul><li>  Club Management System of Indian Institute of Information Technology,  Lucknow (IIIT Lucknow) site is designed for club realted information and  updates on a click.</li><br /><li>  Club Management System provides you with all the clubs indeep and  detailed knowlege and its upcoming events.</li></ul>"
    );
  };
  const vission = () => {
    setInnerhtml(
      "<ul><li>Everyone should get the opportunity to explore their inner self!</li></ul>"
    );
  };
  const objectives = () => {
    setInnerhtml(
      "<ul><li>To provide efficient, transparent and accurate information about the clubs.</li><br /><li>To provide a frienty platform where you can get to know about the clubs, their members, co-ordinators and so on.</li><br /><li>To encourage the students to join the following clubs.</li></ul>"
    );
  };
  const functions = () => {
    setInnerhtml(
      "<ul><li>To provide timely updates regarding the clubs.</li><br /><li>To have a platform where you can have all the informtaion regarding the club at a point.</li><br /><li>To guide the students about the respective club.</li></ul>"
    );
  };
  const team_cms = () => {
    setInnerhtml(
      "We the team of Club Management System (Free Thinkers) have created a platform where each and evry studnet can get and access to the information regarding the clubs of the college and also can learn through it. <br /> <br /> Surfing information at different places and platforms becomes a heavy work but if you have all that at a place! <br /> <br /> This website is created by----- <br /> <ul><li>Prashant Kumar Shaw (LCS2022038)</li><li>Rishi Rohilla (LCS2022041)</li><li>Sambhav Singla (LCS2022042)</li><li>Shreya Singh (LCS2022046)</li><li>Soumik Ghosh (LCS2022047)</li><li>Uttkarsh Marwah (LCS2022054)</li></ul><br />batch of 2026 as a mini-project."
    );
  };

  return (
    <section id="about_section" className="main_body" >
      <aside id="about_aside">
        <div class="about_div" onClick={about_cms}>
          ABOUT CMS
        </div>
        <div class="about_div" onClick={vission}>
          VISION
        </div>
        <div class="about_div" onClick={objectives}>
          OBJECTIVES
        </div>
        <div class="about_div" onClick={functions}>
          FUNCTIONS
        </div>
        <div class="about_div" onClick={team_cms}>
          TEAM CMS
        </div>
      </aside>
      <article>{parse(innerhtml)}</article>
    </section>
  );
}
