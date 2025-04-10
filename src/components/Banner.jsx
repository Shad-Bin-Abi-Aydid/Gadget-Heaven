import React from "react";
import bannerImg from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="border-1 rounded-xl p-2">
        <div className="hero bg-[#9538E2] rounded-xl">
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
              <button className="btn btn-primary rounded-full">Shop Now</button>
              <div className="mt-10 border-1 rounded-xl">
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
