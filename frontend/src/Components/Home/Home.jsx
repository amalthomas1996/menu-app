import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import ButtonSection from "../ButtonSection/ButtonSection";
import MenuDetails from "../MenuDetails/MenuDetails";
import About from "../About/About";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ButtonSection />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
