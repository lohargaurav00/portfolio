import React, { useState } from "react";
import style from "./Navbar.module.scss";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className={style.app__navbar} >
      <div className={style.app__navbar_logo} >
        <Image src='/assets/Gaurav.png' alt="logo" width={180} height={40} />
      </div>
      <ul className={style.app__navbar_links} >
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className={`app__flex p-text`} key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className={style.app__navbar_menu}>
        <HiMenuAlt4 onClick={handleOnClick} />
        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={handleOnClick} />
            </motion.span>
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
