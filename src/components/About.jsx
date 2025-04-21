import React from "react";

const About = () => {
  return (
    <div className="space-y-10">
      <div className=" flex flex-col justify-center items-center gap-5 py-5 bg-[#9538E2] ">
        <h1 className="text-2xl font-bold">About Us</h1>
        <h2 className="text-lg">
          Welcome to Gadget Heaven – Where Innovation Meets Everyday Life
        </h2>
      </div>
      <div className="grid grid-cols-3">
        <p className="col-span-2">
          At Gadget Heaven, we’re more than just a tech store — we’re a team of
          passionate tech enthusiasts committed to bringing you the latest and
          greatest in gadgets, electronics, and smart accessories. Whether
          you're a casual shopper, a tech geek, or a professional looking for
          reliable gear, we’ve got something for everyone.
        </p>
        <p className="col-span-2 col-start-2">
          Join thousands of happy customers who trust Gadget Haven to keep them
          ahead in a fast-moving digital world. We’re always here to help,
          guide, and geek out with you.
        </p>
      </div>
    </div>
  );
};

export default About;
