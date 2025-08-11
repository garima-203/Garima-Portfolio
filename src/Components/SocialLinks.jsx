import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; 

const SocialLink = () => {
  return (
    <div className="top-1/2 right-4 z-20 fixed flex flex-col items-center gap-4 -translate-y-1/2">
      <a href="https://www.linkedin.com/in/garima-upadhyay-20j73/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="text-white hover:text-purple-500 md:text-3xl hover:scale-125 transition duration-300 cursor-pointer transform" />
      </a> 
      <a href="mailto:garimau315@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
        <FaEnvelope className="text-white hover:text-purple-500 md:text-3xl hover:scale-125 transition duration-300 cursor-pointer transform" />
      </a>
      <a href="https://github.com/garima-203" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="text-white hover:text-purple-500 md:text-3xl hover:scale-125 transition duration-300 cursor-pointer transform" />
      </a>
    </div>
  );
};

export default SocialLink;
