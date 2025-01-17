import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-500 text-center pt-2 pb-6">
      <h1 className="italic">...Reach out to me...</h1>
      <div className="flex items-center justify-center space-x-12 mt-1 text-3xl">
        <a
          href="https://x.com/Emma_Leo01?t=Z3Vm8NoHnMDQOuDL55Of2g&s=08"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareXTwitter className="hover:text-red-500 hover:transition-all cursor-pointer duration-300 hover:animate-ping" />
        </a>

        <a href="https://wa.me/+2348111184177" target="_blank" rel="noreferrer">
          <FaWhatsappSquare className="hover:text-red-500 hover:transition-all cursor-pointer duration-300 hover:animate-ping" />
        </a>
        <a
          href="https://github.com/OyeyipoEmmanuel"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="hover:text-red-500 hover:transition-all cursor-pointer duration-300 hover:animate-ping" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
