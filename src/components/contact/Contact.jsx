import React from 'react';
import './contact.css';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_c2edgo4',
        'template_5k2dvib',
        formRef.current,
        'BET_7-tzu8R4Fzrxk'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://res.cloudinary.com/daxrdiiyr/image/upload/v1665311919/dungthinh/phone_ltvhuc.png"
                alt=""
                className="c-icon"
              />
              +84 888 244 133
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://res.cloudinary.com/daxrdiiyr/image/upload/v1665311919/dungthinh/email_trhizp.png"
                alt=""
              />
              dungthinhtv@gmail.com
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://res.cloudinary.com/daxrdiiyr/image/upload/v1665311919/dungthinh/address_coxq4d.png"
                alt=""
              />
              588 Nguyen Thi Dinh, Thu Duc, HCMC, Vietnam
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What???s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && '#333' }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && 'Thank you...'}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
