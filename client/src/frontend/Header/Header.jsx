import React from "react";
import { motion } from "framer-motion";
// import { AppWrap } from "../../client/src/wrapper";
import main from "../../assets/main.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="app-container">



          <div className="headerContainer">
            {/* <motion.div
              whileInView={{ x: [200, 0], opacity: [0, 1] }}
              transition={{ duration: 1.9 }}
              className=""
            > */}
              <h1 className="ramzi-osta">RAMZI OSTA</h1>
            {/* </motion.div> */}
          </div>

          <div className="bodyContainer">
            
            <div className="imageContainer">
              <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 2, ease: "easeInOut" }}
                src={main}
                alt="profile image"
                className="profileImage"
              />
            </div>

            <div className="textContainer">
              <div className="text">
                {/* <motion.div
                  whileInView={{ y: [-150, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.9 }}
                  className="app__header-img"
                > */}
                  <p className="hello-world">Hello World</p>
                {/* </motion.div> */}

                {/* <motion.div
                  whileInView={{ x: [300, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.9 }}
                > */}
                  <p className="fullstack-web-developer pp-neue-montreal-medium-black-40px ">
                    Fullstack Web Developer
                  </p>
                {/* </motion.div> */}

                {/* <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 1 }}
                > */}
                  <p className="virtual-manager pp-neue-montreal-medium-black-40px ">
                    Virtual Manager
                  </p>
                {/* </motion.div>

                <motion.div
                  whileInView={{ x: [-300, 0], opacity: [0, 1] }}
                  transition={{ duration: 2 }}
                > */}
                  <p className="designer pp-neue-montreal-medium-black-40px ">
                    Designer
                  </p>
                {/* </motion.div> */}
                <div className="hero-pitch">
                  {/* <motion.div
                    whileInView={{ x: [300, 0], opacity: [0, 1] }}
                    transition={{ duration: 1.9 }}
                  > */}
                    <p className="pitch">
                      Full stack web development and management services for
                      entrepreneurs startups and small businesses to establish
                      online presence and streamline operations for success in
                      today's digital landscape.{" "}
                    </p>
                  {/* </motion.div> */}

                  <motion.div
                    whileInView={{ y: [-300, 0], opacity: [0, 1] }}
                    transition={{ duration: 1.9 }}
                  >
                    <div className="call-to-action">
                      Elevate your business now!
                    </div>
                  </motion.div>

                  {/* <motion.div
                    whileInView={{ x: [300, 0], opacity: [0, 1] }}
                    transition={{ duration: 1.9 }}
                  > */}
                    <div onclick="Calendly.initPopupWidget({url: 'https://calendly.com/ramziosta?hide_landing_page_details=1&hide_gdpr_banner=1'});return false;">
                      <a className="button " href="ff" id="button">
                        Contact Me
                      </a>
                    </div>
                  {/* </motion.div> */}
                </div>
              </div>
            </div>

          </div>


        </div>

    </>
  );
};

export default Header;
// export default AppWrap(Header, "Home");
