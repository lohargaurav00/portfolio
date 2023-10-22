import React, { useState } from "react";
import Image from "next/image";

import { client } from "@/Client";
import { AppWrap, MotionWrap } from "@/Wrapper";
import style from "./Footer.module.scss";


const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">
        Take a <span>Coffee</span> & Chat with <span> Me</span>
      </h2>
      <div className={style.app__footer_cards}>
        <div className={style.app__footer_card}>
          <Image src='/assets/email.png' alt="email" width={40} height={40} />
          <a href="mailto:lohargaurav00@gmail.com" className="p-text">
            lohargaurav00@gmail.com
          </a>
        </div>
        <div className={style.app__footer_card}>
          <Image src='/assets/mobile.png' alt="mobile" width={40} height={40}/>
          <a href="tel:+91 8766991308" className="p-text">
            +91 8766991308
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className={`${style.app__footer_form} app__flex`}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Your Name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Your Email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              name="message"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Than you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, style.app__footer),
  "contact",
  "app__whitebg"
);
