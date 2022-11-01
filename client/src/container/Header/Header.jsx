
import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.95, delayChildren: 0.95 }}
      className="app__header-img"
    >
      <img src={images.ramzi} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
    <motion.div
      whileInView={{ x: [200, 10], opacity: [0, 1] }}
      transition={{ duration: 1.9 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div className="text">
            <p className="p-text">Hello World</p>
            <h1 className="head-text">Ramzi Osta</h1>
            <p className="p-text">Fullstack Web Developer</p>
            <p className="p-text">Designer</p>
            <p className="p-text">Musician</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, "Home");
