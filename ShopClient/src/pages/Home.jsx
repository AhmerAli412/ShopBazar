import React from "react";
//import Announcement from "../components/Announcement";
import Bari from "../components/Bari";
import Categories from "../components/Categories";
import DosriBari from "../components/DosriBari";
import Flash from "../components/Flash";
//import Footer from "../components/Footer";
//import Menu from "../components/Menu";
//import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import BabyItem from "../components/BabyItem";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* <Announcement />
      <Navbar /> 
      <Menu/> */}
      <Header/>
      <Slider />
      <Categories />
      <Products/>
      <Bari/>
      <Flash/>
      <DosriBari/>
      <BabyItem/>
      <Newsletter/>
      <Footer/>
      {/* <Footer/>   */}
    </div>
  );
};

export default Home;