import React, { useState, useRef } from 'react';
import { HiPhone, HiMail } from 'react-icons/hi';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };
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

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <HiMail />
          <a href="mailto:ramziosta.code@gmail.com" className="p-text"> ramzi@ramziosta.com</a>
        </div>
        <div className="app__footer-card">
          <HiPhone />
          <a href="tel:+1 (123) 456-7890" className="p-text"> +1 (248) 739-1499</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        // <div className="app__footer-form app__flex">
        //   <div className="app__flex"> 
        <form 
        ref={form}
        onSubmit={sendEmail}
        action="/action_page.php"
        style={{
          border: "solid 4px rgb(250, 200,65)",
          padding: "25px",
        }}
        target="_blank"
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
          >
            Send
          </button>
        </p>
      </form>
        //     <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
        //   </div>
        //   <div className="app__flex">
        //     <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        //   </div>
        //   <div>
        //     <textarea
        //       className="p-text"
        //       placeholder="Your Message"
        //       value={message}
        //       name="message"
        //       onChange={handleChangeInput}
        //     />
        //   </div>
        //   <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        // </div>
        //###############################
       
        //###############################
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
  'Contact',
  'app__whitebg',
);
