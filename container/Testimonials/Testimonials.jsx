import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

import { AppWrap, MotionWrap } from "@/Wrapper";
import { urlFor, client } from "@/Client";
import style from "./Testimonials.module.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const test = testimonials[currentIndex];

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(query).then((data) => setTestimonials(data));
    client.fetch(brandsQuery).then((data) => setBrands(data));
  }, []);

  const handleClick = (index) =>{
    setCurrentIndex(index);
  }
  return (
    <>
      {testimonials.length && (
        <>
          <div className={`${style.app__testimonial-item} app__flex`}>
            <Image src={urlFor(test.imgUrl).url()} alt="testimonial" width={100} height={100} />
            <div className={style.app__testimonial-content}>
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>
          <div className={`${style.app__testimonial-btns} app__flex`}>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === null ? testimonials.length - 1: currentIndex - 1)}
            ><HiChevronLeft/></div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === testimonials.length - 1? 0: currentIndex + 1)}
            ><HiChevronRight/></div>
          </div>
        </>
      )}
      <div className={`${style.app__testimonial-brands} app__flex`}>
        {brands.map((brand)=>(
          <motion.div
          whileInView={{opacity:[0, 1], }}
          transition={{duration:0.5,type:"tween"}}
          key={brand._id}
          >
            <Image src={urlFor(brand.imgUrl).url() } alt="brand.name" width={150} height={150} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, style.app__testimonial),
  "testimonials",
  "app__primarybg"
);

