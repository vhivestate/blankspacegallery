import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
                //only updates if form passed quality
                if (!errorMessage) {
                    setFormState({ ...formState, [e.target.name]: e.target.value });
                  }
              }
              console.log('errorMessage', errorMessage);
          } 
           
         //get input values
        setFormState({...formState, [e.target.name]: e.target.value })
        // console.log(formState);
      }

      //get input value when form is submitted
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return (
        <section className='Form'>
          <h1 className='mail'>CONTACT US</h1>
          <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">GUEST ARTIST INQUIRY</span> 
                <input type="radio" name="radio-7" className="radio checked:bg-red-500" checked />
            </label>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">GALLERY INQUIRY</span> 
                <input type="radio" name="radio-7" className="radio checked:bg-blue-500" checked/>
            </label>
            </div>
          <form className='contactForm' action="" id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name"></label>
              <input type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Name"/>
            </div>
            <div>
              <label htmlFor="email"></label>
              <input type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email Address"/>
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Your message"/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button className="btn glass">Submit</button>
          </form>
          {/* <img className='pngMail' src={mailPng}></img> */}
          {/* <h3 className='connect'>Connect with me:</h3> */}
        </section>
        );

    // JSX
    }
    
    export default Contact;