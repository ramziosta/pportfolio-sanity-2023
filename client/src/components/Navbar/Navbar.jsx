import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

//import images from "../../assets/RO.png";
import "./Navbar.scss";
const navigationItems = ["Home", "About", "Services", "Contact", "More"];
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const logo = "RO";
  const left = "<";
  const right = "/>";

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h4 className="logo left">{left}</h4>
        <h4 className="logo initials">{logo}</h4>
        <h4 className="logo right">{right}</h4>
      </div>
      <ul className="app__navbar-links">
        {navigationItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Services", "Contact", "More"].map((item) => (
                <li key={item}>
               
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>

                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
