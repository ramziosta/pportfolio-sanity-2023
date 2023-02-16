import React, { useState, useRef } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const input = document.querySelectorAll("#first_name, #last_name");
    emailjs.sendForm(
        "service_eirar1m",
        "template_lb9v02w",
        form.current,
        "wbuyzv3SiIAVgnRc_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //add clear form
    input.value = "";
  };

  return (
    <>
      <h2 className="head-text">Contact Me</h2>
      {!isFormSubmitted ? (
        // <div className="app__footer-form app__flex">
           <div className="contact-form"> 
        <form 
        ref={form}
        onSubmit={sendEmail}
      >
        <p>
          <input
            className="p-text"
            type="text"
            required
            name="user_name"
            placeholder="Name"
          />
        </p>
        <p>
          <input
            className="p-text"
            type="text"
            placeholder="Email"
            required
            name="user_email"
          />
        </p>
        <p>
          <input
            className="p-text"
            type="text"
            placeholder="Subject"
            required
            name="Subject"
          />
        </p>
        <p>
          <textarea
            className="p-text"
            type="text"
            placeholder="Message"
            required
            name="message"
          />
        </p>
        <p>
          <button
            type="submit"
            value="send"
            className="send-button"
          >
            Send
          </button>
        </p>
      </form>
   
      </div>
        //   <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
       
     
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch with me!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contact','app__primarybg',
);
