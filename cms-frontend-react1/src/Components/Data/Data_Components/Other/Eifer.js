import React from "react";
import logo from "../../../Images/eifer_logo.jpg";
import nischal from "../../../Images/nischalgoyal.jpeg";
import nikhil from "../../../Images/nikhildev.jpeg";

const Eifer = () => {
  return (
    <>
        <img src={logo} />
      <h1>EIFER</h1>
      <p>Eifer is the SPORTS SOCIETY of IIIT Lucknow.</p>
      Some other events of Eifer are : <br />
      <ul>
        <li>Inter-IIIT Call of Duty Mobile Tournament</li>
        <li>King of 64 (Chess Tournament)</li>
        <li>E-Wars - Skribbl.lO, COD Mobile, Valorant</li>
        <li>EIFER IIITL (Wrap-Up)</li>
        <li>INFINITO</li>
      </ul>
      <h2>CO-ORDINATORS</h2>
      <figure>
        <img src={nischal} />
        <figcaption>Nischal Goyal</figcaption>
      </figure>
      <figure>
        <img src={nikhil} />
        <figcaption>Nikhil Dev</figcaption>
      </figure>
      <div class="materials">
        <h2>To Check our Future Events</h2>
        <a href="eifer_materials.pdf" download>
          <button id="download">DOWNLOAD</button>
        </a>
      </div>{" "}
      <br />
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default Eifer;
