import React from "react";
import { motion, useCycle } from "framer-motion";
import SidebarComponent from "../components/SidebarComponent";

const FourthPage = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.div
      className="home-page"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="second-page">
        <SidebarComponent />
      </section>
    </motion.div>
  );
};

export default FourthPage;
