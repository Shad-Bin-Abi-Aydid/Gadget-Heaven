import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto ">
        <Navbar></Navbar>
        <Toaster />

        <div className="bg-gray-600">
        <Outlet></Outlet>

        </div>
        
        

        <Footer></Footer>
    </div>
  );
};

export default MainLayout;
