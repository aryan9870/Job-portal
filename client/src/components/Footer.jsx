import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-10 mx-auto flex items-center justify-between gap-4 py-3 mt-20">
      <img width={160} src={assets.logo} alt="" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500">
        Copyright @aryan.dev | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <a target="_blank" href="https://www.linkedin.com/in/aryan-singh-949144313/">
          <span className="border rounded-full p-1 w-8 h-8 flex justify-center items-center">
            <i className="fa-brands fa-linkedin-in"></i>
          </span>
        </a>
        <a target="_blank" href="https://www.instagram.com/ary_an__04/">
          <span className="border rounded-full p-1 w-8 h-8 flex justify-center items-center">
            <i className="fa-brands fa-square-instagram"></i>
          </span>
        </a>
        <a target="_blank" href="https://github.com/aryan9870">
          <span className="border rounded-full p-1 w-8 h-8 flex justify-center items-center">
            <i className="fa-brands fa-github"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
