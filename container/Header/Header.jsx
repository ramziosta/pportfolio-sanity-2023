import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../client/src/wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  const [flashing, setFlashing] = useState("stop large-button");
  useEffect(() => {
    setInterval(() => {
      flashText();
    }, 1000);
  });
  const flash = document.getElementById("button");

  function stop() {
    flash.className = "stop large-button";
  }
  function flashText() {
    flash.className =
      flash.className === "go large-button"
        ? "stop large-button"
        : "go large-button";
  }

  return (
    <>
      <div className="app__header app__flex">
        
        <motion.div
          whileInView={{ x: [-150, 10], opacity: [0, 1] }}
          transition={{ duration: 1.9 }}
          className="app__header-img"
        >
          <img src={images.main} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

        <div className="content-div">
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


          <motion.div
            whileInView={{ x: [300, 40], opacity: [0, 1] }}
            transition={{ duration: 1.9 }}
          >
            <div className="button-div">
              <a
                onMouseEnter={stop}
                href="#f"
                className="large-button"
                id="button"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ramziosta?hide_landing_page_details=1&hide_gdpr_banner=1'});return false;"
              >
                Connect
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </>
  );
};

export default AppWrap(Header, "Home");
