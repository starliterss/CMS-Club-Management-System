import React from "react";
import cultural_logo from '../Images/cultural_logo.jpg'
import technical_logo from '../Images/axios_logo.jpeg'
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact_section" className="main_body">
      <article>
        <img
          src={cultural_logo}
          style={{ marginLeft: "45%", width: "11%", borderRadius: "100%" }}
        />
        <h1>CULTURAL CLUBS</h1>
        <div style={{ border: "2px solid black", padding: 0 }}></div>
        <div style={{ overflowY: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Clubs</th>
                <th>Co-ordinators</th>
                <th>E-mails</th>
                <th>Phone Numbers</th>
                <th>Social Handles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CROTONIA</td>
                <td>
                  <ul>
                    <li>Priyanshu Upadhyay</li>
                    <li>Shreya Tarwey</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="priyanshu34@gmail.com" target="_blank">
                        priyanshu34@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="shreyat@gmail.com" target="_blank">
                        shreyat@gmail.com
                      </a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="tel:+919651083663">+919651083663</a>
                    </li>
                    <li>
                      <a href="tel:+917797730658">+917797730658</a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="social">
                    <li>
                      <a
                        href="https://instagram.com/crotonia_iiitl?igshid=YmMyMTA2M2Y"
                        target="_blank"
                        className="fa fa-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@CROTONIAIIITLucknow"
                        target="_blank"
                        className="fa fa-youtube"
                      ></a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>ZEPHYR</td>
                <td>
                  <ul>
                    <li>Pallavi Chauhan</li>
                    <li>Jatin Punase</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        pallaviC123@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        JP5225@gmail.com
                      </a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="tel:+918664823935">+918664823935</a>
                    </li>
                    <li>
                      <a href="tel:+917564738239">+917564738239</a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="social">
                    <li>
                      <a
                        href="https://instagram.com/zephyr__iiitl?igshid=YmMyMTA2M2Y"
                        target="_blank"
                        className="fa fa-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@zephyr-dancesocietyofiiitl2939"
                        target="_blank"
                        className="fa fa-youtube"
                      ></a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>ESTRELLA</td>
                <td>
                  <ul>
                    <li>Ashleysha Sohala</li>
                    <li>Akshay Bhatnagar</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        ashleysha23@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        akshaybhatnagar@gmail.com
                      </a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="tel:+919777823935">+919777823935</a>
                    </li>
                    <li>
                      <a href="tel:+917564738239">+917544567239</a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="social">
                    <li>
                      <a
                        href="https://instagram.com/estrella_iiitl?igshid=YmMyMTA2M2Y"
                        target="_blank"
                        className="fa fa-instagram"
                      ></a>
                    </li>
                    <li>
                      <a href="" target="_blank" className="fa fa-youtube"></a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>AFTERDARK</td>
                <td>
                  <ul>
                    <li>Ritu Kumari</li>
                    <li>Mohit Prajapat</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        ritukumarii@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        mohitiam@gmail.com
                      </a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="tel:+919777823935">+918877823935</a>
                    </li>
                    <li>
                      <a href="tel:+917564738239">+918004556539</a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="social">
                    <li>
                      <a
                        href="https://instagram.com/iiitl_afterdark?igshid=YmMyMTA2M2Y"
                        target="_blank"
                        className="fa fa-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@afterdark-thephotographycl6159"
                        target="_blank"
                        className="fa fa-youtube "
                      ></a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>GOONJ</td>
                <td>
                  <ul>
                    <li>Ramanuj Dodiya</li>
                    <li>Ashutosh Rajput</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        ramanaujdodiya@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        itsashutosh@gmail.com
                      </a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="tel:+919777823935">+918866093935</a>
                    </li>
                    <li>
                      <a href="tel:+917564738239">+919934567239</a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="social">
                    <li>
                      <a
                        href="https://instagram.com/goonj_iiitl?igshid=YmMyMTA2M2Y"
                        target="_blank"
                        className="fa fa-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@goonj-thedramaticssociety"
                        target="_blank"
                        className="fa fa-youtube"
                      ></a>
                    </li>
                    <li></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <article>
        <img
          src={technical_logo}
          style={{ marginLeft: "45%", width: "11%", borderRadius: "100%" }}
        />
        <h1>TECHNICAL CLUB</h1>
        <div style={{ border: "2px solid black", padding: 0 }}></div>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Club</th>
                <th>Co-ordinators</th>
                <th>E-mails</th>
                <th>Phone Numbers</th>
                <th>Social Handles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AXIOS</td>
                <td>
                  <ul>
                    <li>Abhinay Pandey</li>
                    <li>Tejas Taneja</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        abhinay34@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        tanejat@gmailcom
                      </a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="tel:+919651083663">+919651083663</a>
                    </li>
                    <li>
                      <a href="tel:+917797730658">+917797730658</a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="social">
                    <li>
                      <a
                        href="https://instagram.com/_axiosiiitl_?igshid=YmMyMTA2M2Y"
                        target="_blank"
                        className="fa fa-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="http://linkedin.com/company/axios-iiit-lucknow/"
                        target="_blank"
                        className="fa fa-linkedin"
                      ></a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <article>
        <img
          src="eifer_logo.jpg"
          alt=""
          style={{ marginLeft: "37%", width: "11%", borderRadius: "100%" }}
        />
        <img
          src="E-cell_logo.jpg"
          alt=""
          style={{ marginLeft: "5%", width: "11%", borderRadius: "100%" }}
        />

        <h1>OTHER CLUBS</h1>
        <div style={{ border: "2px solid black", padding: 0 }}></div>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Clubs</th>
                <th>Co-ordinators</th>
                <th>E-mails</th>
                <th>Phone Numbers</th>
                <th>Social Handles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EIFER</td>
                <td>
                  <ul>
                    <li>Nischal Goyal</li>
                    <li>Nikhil Dev</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        nischal32@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        nikhill@gmailcom
                      </a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="tel:+919651083663">+919651083663</a>
                    </li>
                    <li>
                      <a href="tel:+917797730658">+917797730658</a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="social">
                    <li>
                      <a
                        href="https://instagram.com/sports_society_iiitl?igshid=YmMyMTA2M2Y="
                        target="_blank"
                        className="fa fa-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@eifer-sportsclubofiiitluck2150"
                        target="_blank"
                        className="fa fa-youtube"
                      ></a>
                    </li>
                    <li></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>E-CELL</td>
                <td>
                  <ul>
                    <li>Vivek Barnwal</li>
                    <li>Surbhi Singh</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        priyanshu34@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        shreyat@gmailcom
                      </a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="tel:+919651083663">+919651083663</a>
                    </li>
                    <li>
                      <a href="tel:+917797730658">+917797730658</a>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="social">
                    <li>
                      <a
                        href="https://instagram.com/ecell_iiitl?igshid=NjZiMGI4OTY="
                        target="_blank"
                        className="fa fa-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/channel/UCRnnUmtMdoRbL9l6kGh3LZQ"
                        target="_blank"
                        className="fa fa-youtube"
                      ></a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
