import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useMediaQuery } from "react-responsive";
import "react-tooltip/dist/react-tooltip.css";

import { urlFor, client } from "@/Client";
import { AppWrap, MotionWrap } from "@/Wrapper";
import style from "./Skills.module.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => setExperiences(data));
    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);
  return (
    <>
      <h2 className="head-text">
        Skills & <span>Experience</span>
      </h2>
      <div className={style.app__skills_container}>
        <motion.div className={style.app__skills_list}>
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.25 }}
              className={`${style.app__skills_item} app__flex`}
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <Image src={urlFor(skill.icon).url()} alt={skill.name} width={80} height={80} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className={style.app__skills_exp}>
          {experiences?.map((experience) => (
            <motion.div className={style.app__skills_exp_item} key={experience.year}>
              <div className={style.app__skills_exp_year}>
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className={style.app__skills_exp_works}>
                {experience.works?.map((work) => (
                  <div className={style.app__skills_tooltip} key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      data-tooltip-id={work.name}
                      className={style.app__skills_exp_work}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      place={isMobile ? "top" : "right"}
                      className={style.skills_tooltip}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, style.app__skills),
  "skills",
  "app__whitebg"
);
