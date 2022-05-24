import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import SliderComponent from "./components/SliderComponent";

function App() {
  const [move, setMove] = useState(false);

  return (
    <div className="App">
      {/* <motion.div
        animate={{ x: move ? 360 : -220 }}
        transition={{ type: "inertia" }}
        onClick={() => setMove(!move)}
        className="box"
      ></motion.div> */}
      {/* <motion.div
        drag="x"
        dragConstraints={{ left: 150 }}
        className="box"
      ></motion.div> */}
      {/* <motion.div
        className="box"
        animate={{ rotate: [0, 200, 200, 0], x: [0, 150, -150, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      ></motion.div> */}
      <SliderComponent />
    </div>
  );
}

export default App;
