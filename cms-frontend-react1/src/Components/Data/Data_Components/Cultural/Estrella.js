import React from "react";
import logo from "../../../Images/estrella_logo.jpg";
import ashleysha from "../../../Images/ashleysha.jpg";
import akshay from "../../../Images/akshay bhatnagar.jpg";

const Estrella = () => {
  return (
    <>
        <img src={logo} />
      <h1>ESTRELLA</h1>
      <p>
        <b>"Music says what’s in your heart when you can’t find the words"</b>{" "}
        <br />
        Estrella is the Music Society of IIIT Lucknow. <br />
        TARANG (2021) is an online music event. An online music competition.{" "}
        <br />
        There are bands knows as "THE MIDNIGHT BUZZ" and "RUDRA" in IIIT
        Lucknow.
      </p>
      Some other events of Estrella are : <br />
      <ul>
        <li>Jam Night</li>
        <li>Antakshri Night (Sing your woes away)</li>
        <li>Tarang 2.0</li>
        <li>Octaves (In Equinox'23)</li>
        <li>Atrangi Antakshiri 2.0 (In Equinox'23)</li>
        <li>Deaf Charades (In Equinox'23)</li>
      </ul>
      <h2>CO-ORDINATORS</h2>
      <figure>
        <img src={ashleysha} />
        <figcaption>Ashleysha Sohala</figcaption>
      </figure>
      <figure>
        <img src={akshay} />
        <figcaption>Akshay Bhatnagar </figcaption>
      </figure>
      <h2>SENIOR MEMBERS</h2>
      <ul>
        <li>Aditya Agrawal</li>
        <li>Shivam Chandra</li>
        <li>Sahil Rathi</li>
        <li>Surbhi Singh</li>
        <li>Aman Anand</li>
        <li>Molugurum Asita</li>
        <li>Jai Mehta</li>
        <li>Ahmad Maaz</li>
        <li>Manasvi Agrawal</li>
        <li>Pratyush Patidar</li>
      </ul>
      <h2>TEAM MEMBERS</h2>
      <ul>
        <li>Manan Chawla</li>
        <li>Vibhor Gupta</li>
        <li>Aryan Kaushal</li>
        <li>Ananya Gupta</li>
        <li>Kundan Pratap Singh</li>
        <li>Dhruv Prakash Singh Fonia</li>
        <li>Rishi Mahajan</li>
        <li>Lakshay</li>
      </ul>
      <ul>
        <li>Saptarshi Majumder</li>
        <li>Hamza Khan</li>
        <li>Savarna Chandra</li>
        <li>Vidisha Agarwal</li>
        <li>Sameep Aher</li>
        <li>Shruti Sharad Gajbhiye</li>
        <li>Ayush Sharma</li>
        <li>A.B. Madhava</li>
      </ul>
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default Estrella;
