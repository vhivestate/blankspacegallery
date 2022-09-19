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
          <form className='contactForm' action="" id="contact-form" onSubmit={handleSubmit}>
        
            <div>
                <label htmlFor="name" className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" name="name" placeholder="Type here" defaultValue={name} onBlur={handleChange}  className="input input-bordered w-full max-w-xs" />
            </div>


            <div>
              <label htmlFor="email" className="label">
              <span className="label-text">Email Address</span>
              </label>
              <input type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email Address" className="input input-bordered w-full max-w-xs"/>
            </div>

            <div>
            <label htmlFor="inquiry" className="label">
              <span className="label-text">Inquiry Type</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Type of inquiry?</option>
                <option>Guest Artist</option>
                <option>Gallery</option>
              </select>
            </div>

            <div>
              <label htmlFor="message"></label>
              <textarea className="textarea textarea-bordered" name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Type message here..."/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button className="btn glass">Submit</button>
          </form>
        </section>
        );

    // JSX
    }
    
    export default Contact;