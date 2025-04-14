import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto ">
        <Navbar></Navbar>

        <div className="bg-gray-600 p-5">
        <Outlet></Outlet>

        </div>
        
        

        <Footer></Footer>
    </div>
  );
};

export default MainLayout;
