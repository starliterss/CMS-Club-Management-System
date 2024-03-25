import React from "react"
import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div id="footer1">
        <div style={{ marginTop: "1vh", fontSize:"1.1rem" }}>
          IIIT Lucknow <br />
          Chak Ganjaria, C. G. City
          <br />
          Lucknow – 226002
          <br />
          <Link to="https://mail.google.com/a/iiitl.ac.in" target="_blank">
            contact@iiitl.ac.in
          </Link>
        </div>
        <div
          style={{ border: "2px solid greenyellow", marginLeft: "34px" }}
        ></div>
        <div>
          <h2 style={{ margin: "1vh 0 0.5vh 0" }}>USEFUL LINKS</h2>
          <hr />
          <ul>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
            <li>
              <Link to="gallery">Gallery</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="data" target="_blank">
                For Club Private Data(Only For Members)
              </Link>
            </li>
          </ul>
        </div>
        <div style={{border:"2px solid greenyellow"}}></div>
        <div></div>
      </div>
      <div id="footer2">
        <div> &copy; 2023 IIIT LUCKNOW</div>
        <div>
          <ul class="social">
            <li>
              <Link
                to="https://mail.google.com/a/iiitl.ac.in"
                target="_blank"
                class="fa fa-envelope"
              ></Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/Indian-Institute-of-Information-Technology-Lucknow-IIITL-101698791377071"
                target="_blank"
                class="fa fa-facebook"
              ></Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/school/iiitl/"
                class="fa fa-linkedin"
                target="_blank"
              ></Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/iiit_lucknow"
                target="_blank"
                class="fa fa-twitter"
              ></Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/iiitlucknow/"
                target="_blank"
                class="fa fa-instagram"
              ></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
