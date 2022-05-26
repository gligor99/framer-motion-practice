import React from "react";
import { motion } from "framer-motion";

import SliderComponent from "../components/SliderComponent";

const HomePage = () => {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="slider-section">
        <SliderComponent />;
      </div>
    </motion.div>
  );
};

export default HomePage;
