import React from "react";

const Footer = () => {
  return (
    <div className="space-y-5 mt-20">
      <h1 className="text-3xl font-bold text-center">Gadget Heaven </h1>
      <p className="text-center text-gray-400">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className="border-1 border-gray-700"></div>
      <footer className="footer sm:footer-horizontal flex justify-around text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
          
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
