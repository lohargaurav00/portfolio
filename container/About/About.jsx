import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import style from "./About.module.scss";
import { urlFor, client } from "@/Client";
import { AppWrap, MotionWrap } from "@/Wrapper";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>
        I Know that <span>Good Development</span> <br />
        Means <span>Good Business</span>
      </h2>
      <div className={style.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={style.app__profile_items}
            key={about.title + index}
          >
            <Image alt={about.title} src={urlFor(about.imgUrl).url()} width={375} height={200} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, style.app__about),
  "about",
  "app__whitebg"
);
