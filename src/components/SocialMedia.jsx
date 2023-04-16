import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/lohargaurav00" target="_blank" rel="noreferrer">
          <FaGithub/>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/gaurav-lohar-537895159/" target="_blank" rel="noreferrer" >
        <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/ig__.gaurav.__"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/GauravLohar00"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
