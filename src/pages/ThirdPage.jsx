import React from "react";
import { motion } from "framer-motion";
import SliderComponent from "../components/SliderComponent";

const SecondPage = () => {
  return (
    <motion.div
      className="home-page"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="second-page">
        <h1>Third Page Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex
          beatae impedit accusantium ducimus culpa dolorum porro, iste enim
          nulla, sequi debitis quis et! Est eaque saepe vitae earum eius?
          Doloremque vitae beatae hic. Nemo sint veritatis ipsum libero soluta
          blanditiis voluptatem harum in aspernatur a est excepturi illum dicta
          ratione, quis eveniet natus similique aut? Distinctio minus, aut unde
          impedit labore est debitis eligendi dicta, tenetur sunt, modi
          provident facilis eaque consequuntur. Deleniti eum impedit, maxime sit
          cum molestiae ab nemo fuga? Illum nesciunt, vitae praesentium aliquid
          nulla unde cum incidunt repudiandae ratione voluptas quaerat quo at
          suscipit pariatur dolore repellendus velit corrupti atque commodi
          saepe eaque? Cum, dolorem facilis! Sequi nihil velit error deleniti,
          laboriosam minima? Modi velit expedita placeat architecto dicta
          doloribus? Totam culpa accusamus ullam ducimus impedit numquam nam
          adipisci. Nisi officiis mollitia aut ea, quibusdam, magnam illo error
          obcaecati, nihil suscipit eveniet aperiam adipisci velit?
        </p>
      </section>
    </motion.div>
  );
};

export default SecondPage;
