import React from "react";
import { Outlet, Link } from "react-router-dom";

const Culturalaside = () => {
  return (
    <>
      <aside>
        <Link to="crotonia">
          <div>CROTONIA</div>
        </Link>
        <Link to="utkrisht">
          <div>UTKRISHT</div>
        </Link>
        <Link to="zephyr">
          <div>ZEPHYR</div>
        </Link>
        <Link to="estrella">
          <div>ESTRELLA</div>
        </Link>
        <Link to="afterdark">
          <div>AFTERDARK</div>
        </Link>
        <Link to="goonj">
          <div>GOONJ</div>
        </Link>
      </aside>
      <article id="data_article">
        <Outlet />
      </article>
    </>
  );
};

export default Culturalaside;
