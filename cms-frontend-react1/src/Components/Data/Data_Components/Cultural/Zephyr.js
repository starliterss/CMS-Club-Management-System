import React from "react";
import logo from "../../../Images/zephyr_logo.jpg";
import pallavi from "../../../Images/pallavi chauhan.jpg";
import jatin from "../../../Images/jatin punase.jpg";

const Zaphyr = () => {
  return (
    <>
        <img src={logo} />
      <h1>ZEPHYR</h1>
      <p>
        <blockquote>
          <b>
            "When you dance, your purpose is not to get to a certain place on
            the floor. It's to enjoy each step along the way."
          </b>
          <footer>
            <b>-Wayne Dyer</b>
          </footer>
        </blockquote>
        <br />
        Zephyr is The Dance Society of IIIT Lucknow. <br />
        VIBRANT FEET is an online dance-off event for those who love to spread
        the joy of dance.
      </p>
      Some other events of Zephyr are : <br />
      <ul>
        <li>Reel of Reelax</li>
        <li>Vibrant Feet 2.0 (Relive the Golden Era)</li>
        <li>Bollywood Night (In Enspire'22)</li>
        <li>Nrityang (In Equinox'23)</li>
        <li>Prom Night (In Equinox'23)</li>
      </ul>
      <h2>CO-ORDINATORS</h2>
      <figure>
        <img src={jatin} />
        <figcaption>Jatin Punase</figcaption>
      </figure>
      <figure>
        <img src={pallavi} />
        <figcaption>Pallavi Chauhan</figcaption>
      </figure>
      <h2>SENIOR MEMBERS</h2>
      <ul>
        <li>Nameyal Angmo</li>
        <li>Manish Reddy</li>
        <li>Devi Manasa</li>
        <li>Nirmal Minz</li>
        <li>Yash Kumar</li>
        <li>Aakash Jha</li>
        <li>Divya Rai</li>
      </ul>
      <h2>TEAM MEMBERS</h2>
      <ul>
        <li>Aishwarya Paininde</li>
        <li>Prateek Mohan Bolla </li>
        <li>Savarna Chandra </li>
        <li>Shraddha Gulati</li>
        <li>Rhysha Kachari</li>
        <li>Aryan Kaushal</li>
      </ul>
      <ul>
        <li>Ananya Gupta</li>
        <li>Lavesh Verma </li>
        <li>Mahek Jain</li>
        <li>Shivi Gupta</li>
        <li>Kaustuv Behera</li>
        <li>M. Dinesh</li>
        <li>Sharath Chandra</li>
      </ul>
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default Zaphyr;
