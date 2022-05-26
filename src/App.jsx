import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Router, Routes, Route, useLocation } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import SecondPage from "./pages/SecondPage";
import HomePage from "./pages/HomePage";
import ThirdPage from "./pages/ThirdPage";

function App() {
  const [move, setMove] = useState(false);
  const location = useLocation();

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
      <NavbarComponent />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
