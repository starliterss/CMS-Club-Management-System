import React from "react";
import logo from "../../../Images/E-cell_logo.jpg";
import vivek from "../../../Images/vivekbarnwal.jpeg";
import surbhi from "../../../Images/surbhisingh.jpeg";

const Ecell = () => {
  return (
    <>
        <img src={logo} />
      <h1>E-CELL</h1>
      <p>
        <b>
          Don't just fly soar with us. <br />
          INITIATE.
          <br />
          &nbsp;&nbsp; INCUBATE.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; ELEVATE
        </b>
      </p>
      Main fest of E-cell is ---<b>ENSPIRE</b>.<h2>CO-ORDINATORS</h2>
      <figure>
        <img src={vivek} />
        <figcaption>Vivek Barnwal</figcaption>
      </figure>
      <figure>
        <img src={surbhi} />
        <figcaption>Surbhi Singh</figcaption>
      </figure>
      <div class="materials">
        <h2> To Download Enspire Prospectus</h2>
        <a href="eifer_materials.pdf" download="E_cell_materials">
          <button id="download">DOWNLOAD</button>
        </a>
      </div>{" "}
      <br />
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default Ecell;
