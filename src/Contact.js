import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container , Row , Col, Label } from 'reactstrap'


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j00ylzh', 'template_xyfd3pw', form.current, 'YUbCtK8m7ajZNSZ4r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

  };



  return (
    <>{/* Start Contact */}
    <section id='contact'>
      <div className="container">
        <div className="row">
            <h1 className='contact-head' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">contact us</h1>
        </div>
        <div className="row">
            <h4 style={{ textAlign: "center" }} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">We'd love to hear from you!</h4>
        </div>
        <form ref={form} onSubmit={sendEmail} className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                <input type="text" name='user-name' required />
                <label>Name</label> 
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <input type="text" name='email' required />
                <label>Email</label> 
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input" style={{ float: "right" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <input type="text" name='phone' required />
                <label>Phone Number</label> 
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <textarea name='message' required />
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
              <input  className="btn-large submit-btn" type="submit" value='Send Message' />
            </div>
        </form>
      
      </div>
      
    </section>
    {/* End Contact */}</>
  )
}

export default Contact