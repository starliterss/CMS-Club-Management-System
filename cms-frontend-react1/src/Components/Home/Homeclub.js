import React, { useState } from "react";
import parse from "html-react-parser";
import crotonia_logo from "../Images/crotonia_logo.jpg";
import utkrisht_logo from "../Images/utkrisht_logo.jpg";
import zephyr_logo from "../Images/zephyr_logo.jpg";
import estrella_logo from "../Images/estrella_logo.jpg";
import afterdark_logo from "../Images/afterdark_logo.jpg";
import goonj_logo from "../Images/goonj_logo.jpg";
import cp_logo from "../Images/cp_logo.png";
import ml_logo from "../Images/ml_logo.png";
import web_logo from "../Images/webd_logo.png";
import foss_logo from "../Images/foss_logo.png";
import app_logo from "../Images/appd_logo.png";
import blockchain_logo from "../Images/blockchain_logo.png";
import infosec_logo from "../Images/infosec_logo.png";
import design_logo from "../Images/design_logo.png";
import eifer_logo from "../Images/eifer_logo.jpg";
import e_cell_logo from "../Images/E-cell_logo.jpg";

export default function Homeclub({ cul_body, club }) {
  let img, width;
  if (club === "CROTONIA") {
    img = crotonia_logo;
    width = "83%";
  }
  if (club === "UTKRISHT") {
    img = utkrisht_logo;
    width = "77%";
  }
  if (club === "ZEPHYR") {
    img = zephyr_logo;
    width = "77%";
  }
  if (club === "ESTRELLA") {
    img = estrella_logo;
    width = "77%";
  }
  if (club === "AFTERDARK") {
    img = afterdark_logo;
    width = "77%";
  }
  if (club === "GOONJ") {
    img = goonj_logo;
    width = "77%";
  }
  if (club === "CP") {
    img = cp_logo;
    width = "90%";
  }
  if (club === "ML") {
    img = ml_logo;
    width = "90%";
  }
  if (club === "WEB") {
    img = web_logo;
    width = "90%";
  }
  if (club === "FOSS") {
    img = foss_logo;
    width = "90%";
  }
  if (club === "APP") {
    img = app_logo;
    width = "90%";
  }
  if (club === "BLOCKCHAIN") {
    img = blockchain_logo;
    width = "90%";
  }
  if (club === "INFOSEC") {
    img = infosec_logo;
    width = "90%";
  }
  if (club === "DESIGN") {
    img = design_logo;
    width = "90%";
  }
  if (club === "EIFER") {
    img = eifer_logo;
    width = "80%";
  }
  if (club === "E_CELL") {
    img = e_cell_logo;
    width = "80%";
  }

  const [display1, setDisplay1] = useState({ display: "flex" });
  const [display2, setDisplay2] = useState({ display: "none" });

  const hover = () => {
    setDisplay1({ display: "none" });
    setDisplay2({ display: "flex" });
  };
  const hoverout = () => {
    setDisplay2({ display: "none" });
    setDisplay1({ display: "flex" });
  };

  return (
    <div id="card" onMouseOver={hover} onMouseOut={hoverout}>
      <div style={display1}>
        <img src={img} width={width} />
        <p>
          <b className="mode_bold">{club}</b>
        </p>
      </div>
      <div style={display2}>{parse(cul_body)}</div>
    </div>
  );
}
