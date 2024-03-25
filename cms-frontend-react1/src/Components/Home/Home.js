import React from "react";
import Slider from "../Slider/Slider";
import cultural_logo from "../Images/cultural_logo.jpg";
import axios_logo from "../Images/axios_logo.jpeg";
import  img2 from "../Images/hc1.jpg";
import  img1 from "../Images/hc2.jpeg";
import  img3 from "../Images/hc3.jpeg";
import  img4 from "../Images/hc4.jpg";
import  img5 from "../Images/hc5.jpeg";
import homedata from "./homedata.json";
import Homeclub from "./Homeclub";
import "./Home.css";

export default function Home() {

  return (
    <div className="main_body">
      <div id="home_under_nav">
        <Slider images={[img1, img2, img3, img4, img5]}/>
        <aside id="aside_home">
          <h1 style={{ textAlign: "center" }}>NOTICE BOARD</h1>
          <hr />
          <ul>
            <li>
              <span style={{ color: "gold" }}>AFTERDARK</span> - Captured
              moments of Eqlogonox, check your mails for the link.
            </li>
            <li>
              <span style={{ color: "aqua" }}>EIFER</span> - Chess selection
              trials for Astra IIIT Delhi's Inter-college Sports fest join the
              link provided in the mail.
            </li>
            <li>
              <span style={{ color: "aqua" }}>EIFER</span> - Badminton selection
              trials for Astra IIIT Delhi's Inter-college Sports fest on 3rd
              March, 2023 at 11.00pm in the Badminton court.
            </li>
            <li>
              <span style={{ color: "aqua" }}>EIFER</span> - Table Tennis
              selection trials for Astra IIIT Delhi's Inter-college Sports fest
              on 2rd March, 2023 at 03.00pm in the Table Tennis room.
            </li>
            <li>
              <span style={{ color: "aqua" }}>EIFER</span> - Information
              regarding Astra IIIT Delhi's Inter-college Sports fest, check your
              mails.
            </li>
            <li>
              <span style={{ color: "chartreuse" }}>
                Axios (Technical Club)
              </span>{" "}
              - Information regarding TalentSprint WE (Women Engineers Program)
              by Google, check your mails.
            </li>
            <li>
              <span style={{ color: "chartreuse" }}>
                Axios (Technical Club) (CP Wing)
              </span>{" "}
              - Regarding ICPC 2022-23.
            </li>
            <li>
              <span style={{ color: "hotpink" }}>Cultural Club</span> - presents
              Holika Dehan on 8th March, 2023 from 10.00pm onwards infront of
              Hostel 1 along with a pre Holi DJ-Night.
            </li>
          </ul>
        </aside>
      </div>
      <section id="home_section">
        <article id="cultural">
          <img
            src={cultural_logo}
            alt=""
            style={{ marginLeft: "45%", width: "11%", borderRadius: "50%" }}
          />
          <h1 className="mode_h1">CULTURAL CLUBS</h1>
          <div
            style={{ border: "2px solid rgb(218, 166, 166)", padding: "0" }}
          ></div>
          <div className="flex_container">
            {homedata.cultural.map((element) => {
              return (
                <Homeclub
                  key={element.club}
                  cul_logo={element.logo}
                  cul_body={element.cardbody}
                  club={element.club}
                />
              );
            })}
          </div>
        </article>
        <article id="technical">
          <img
            src={axios_logo}
            alt=""
            style={{ marginLeft: "45%", width: "11%", borderRadius: "50%" }}
          />
          <h1 className="mode_h1">TECHNICAL CLUBS</h1>
          <div
            style={{ border: "2px solid rgb(218, 166, 166)", padding: "0" }}
          ></div>
          <div className="flex_container">
            {homedata.technical.map((element) => {
              return (
                <Homeclub
                  key={element.club}
                  cul_logo={element.logo}
                  cul_body={element.cardbody}
                  club={element.club}
                />
              );
            })}
          </div>
        </article>
        <article id="other">
          <h1 className="mode_h1">OTHER CLUBS</h1>
          <div
            style={{ border: "2px solid rgb(218, 166, 166)", padding: "0" }}
          ></div>
          <div className="flex_container">
            {homedata.other.map((element) => {
              return (
                <Homeclub
                  key={element.club}
                  cul_logo={element.logo}
                  cul_body={element.cardbody}
                  club={element.club}
                />
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}
