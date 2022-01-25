import React from "react";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  );
};

export default Home;
