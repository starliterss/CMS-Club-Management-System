import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Compoents
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

// Gallery_Components
import Gallery from "./Components/Gallery/Gallery";
import CulturalGallery from "./Components/Gallery/Gallery_Components/CulturalGallery";
import TechnicalGallery from "./Components/Gallery/Gallery_Components/TechnicalGallery";
import EiferGallery from "./Components/Gallery/Gallery_Components/EiferGallery";
import EcellGallery from "./Components/Gallery/Gallery_Components/EcellGallery";

// Data_Compnents
import Data from "./Components/Data/Data";
import Culturalaside from "./Components/Data/Data_Components/Culturalaside";
import Technicalaside from "./Components/Data/Data_Components/Technicalaside";
import Otheraside from "./Components/Data/Data_Components/Otheraside";
import Crotonia from "./Components/Data/Data_Components/Cultural/Crotonia";
import Utkrisht from "./Components/Data/Data_Components/Cultural/Utkrisht";
import Zephyr from "./Components/Data/Data_Components/Cultural/Zephyr";
import Estrella from "./Components/Data/Data_Components/Cultural/Estrella";
import Afterdark from "./Components/Data/Data_Components/Cultural/Afterdark";
import Goonj from "./Components/Data/Data_Components/Cultural/Goonj";
import Cp from "./Components/Data/Data_Components/Technical/Cp";
import Ml from "./Components/Data/Data_Components/Technical/Ml";
import Webd from "./Components/Data/Data_Components/Technical/Webd";
import Foss from "./Components/Data/Data_Components/Technical/Foss";
import Appd from "./Components/Data/Data_Components/Technical/Appd";
import Blockchain from "./Components/Data/Data_Components/Technical/Blockchain";
import Infosec from "./Components/Data/Data_Components/Technical/Infosec";
import Design from "./Components/Data/Data_Components/Technical/Design";
import Eifer from "./Components/Data/Data_Components/Other/Eifer";
import Ecell from "./Components/Data/Data_Components/Other/Ecell";
import Footer from "./Components/Footer/Footer";
import Error404 from "./Components/Error404/Error404";

// Styling
import "./App.css";
import Coverpage from "./Components/Coverpage/Coverpage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Navbar />

      <Routes>
        <Route path="/" element={<Coverpage />} />
        <Route path="/home" element={<Home />} />

        <Route path="contact" element={<Contact />} />

        <Route path="about" element={<About />} />

        <Route path="gallery" element={<Gallery />} >
        <Route index element={<Navigate to="cultural" replace />} />
          <Route exact path="cultural" element={<CulturalGallery />} />
          <Route exact path="technical" element={<TechnicalGallery />} />
          <Route exact path="eifer" element={<EiferGallery />} />
          <Route exact path="ecell" element={<EcellGallery />} />
          <Route path="*" element={<Error404 />} />
        </Route>

        <Route path="data" element={<Data />}>

          <Route index element={<Navigate to="cultural/crotonia" replace />} />
          <Route exact path="cultural" element={<Culturalaside />}>
            <Route index element={<Navigate to="crotonia" replace />} />
            <Route path="crotonia" index element={<Crotonia />} />
            <Route path="utkrisht" element={<Utkrisht />} />
            <Route path="zephyr" element={<Zephyr />} />
            <Route path="estrella" element={<Estrella />} />
            <Route path="afterdark" element={<Afterdark />} />
            <Route path="goonj" element={<Goonj />} />
            <Route path="*" element={<Error404 />} />
          </Route>

          <Route exact path="technical" element={<Technicalaside />}>
            <Route index element={<Navigate to="cp" replace />} />
            <Route path="cp" element={<Cp />} />
            <Route path="ml" element={<Ml />} />
            <Route path="webd" element={<Webd />} />
            <Route path="foss" element={<Foss />} />
            <Route path="appd" element={<Appd />} />
            <Route path="blockchain" element={<Blockchain />} />
            <Route path="infosec" element={<Infosec />} />
            <Route path="design" element={<Design />} />
            <Route path="*" element={<Error404 />} />
          </Route>

          <Route path="other" element={<Otheraside />}>
            <Route index element={<Navigate to="eifer" replace />} />
            <Route exact path="eifer" element={<Eifer />} />
            <Route exact path="ecell" element={<Ecell />} />
            <Route path="*" element={<Error404 />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
