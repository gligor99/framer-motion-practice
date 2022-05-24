import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../images";

const SliderComponent = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carouselRef} className="slider-wrapper">
      <motion.div
        className="inner-carousel"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((image) => {
          return (
            <motion.div className="item" key={image.toString()}>
              <img src={image} alt={image} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SliderComponent;
