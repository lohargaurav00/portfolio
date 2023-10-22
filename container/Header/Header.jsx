import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { AppWrap } from "@/Wrapper";
import style from "./Header.module.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className={`${style.app__header} app__flex`}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={style.app__header_info}
    >
      <div className={style.app__header_badge}>
        <div className={`${style.badge_cmp} app__flex`}>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Gaurav</h1>
          </div>
        </div>

        <div className={`${style.tag_cmp} app__flex`}>
          <p className="p-text">MERN Stack Developer</p>
          <p className="p-text">Programmer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className={style.app__header_img}
    >
        <Image src='/assets/MyProfile1.png' alt="profile_bg" width={500} height={500}/>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src='/assets/circle.svg'
        alt="profile_circle"
        className={style.overlay_circle}
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className={style.app__header_circles}
    >
      {['/assets/typescript.png', '/assets/javascript.png', '/assets/sass.png'].map((circle, index) => (
        <div className={`circle-cmp app__flex`} key={`circle-${index}`}>
          <Image src={circle} alt="profile_bg"  width={100} height={100}/>
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
