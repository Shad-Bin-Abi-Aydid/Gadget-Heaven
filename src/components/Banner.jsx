import React from "react";
import bannerImg from "../assets/images/banner.jpg";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
  const {pathname} = useLocation();
  return (
    <>
      <div className="">
        <div className={`hero bg-[#9538E2] ${pathname == '/' ? "rounded-b-xl" : ""}`}>
          <div className="hero-content text-center">
            <div>
              <h1 className="text-3xl font-bold">
                Upgrade Your Tech Accessorize with <br /> Gadget Heaven
                Accessories
              </h1>
              <p className="py-6">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to <br /> the coolest
                accessories, we have it all!
              </p>
              <Link to="/dashboard" className="btn bg-gray-300 border-1 border-gray-300 text-[#9538E2] font-bold rounded-full">Shop Now</Link>
              <div className="mt-10 border-1 rounded-xl bg-gray-300/35">
                <img className="w-2xl rounded-xl p-2" src={bannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
