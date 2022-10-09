import { useState } from "react";
import { validateEmail } from "../utils/helper.js";

export const Booking = () => {
    const [formState, setFormState] = useState({ age: '', name: '', email: '', artist: '', message: '' });
    const { age, name, email, artist, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => { 
        setFormState({ ...formState, [e.target.name]: e.target.value });

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage('Please enter an email address.');
                }
                setErrorMessage('');
            }
            if(!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
            }
        }
    }

    const emailForm = () => {
        fetch("https://formsubmit.co/ajax/blankspacegalleryllc@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailForm();
        // clear form
        setFormState({ age: '', name: '', email: '', artist: '', message: '' });
        e.target.reset();
        setSuccessMessage('Thank you for your message! I will get back to you as soon as possible.');
        
    }

    return (
        <div>
        <div className="min-h-screen bg-base-50 flex flex-col items-center justify-center">
            <h1 className="logo text-white text-center text-4xl">Tattoo Request Form</h1>
            <div className="w-full py-6 md:w-4/6 my-6">
                <form onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value="false"/>

                <input type="text" name="age" defaultValue={age} onBlur={handleChange}  placeholder="What is your age?" className="input w-full my-2 bg-white" />

                <input type="text" name="name" placeholder="First and Last Name" defaultValue={name} onBlur={handleChange} className="input w-full my-2 bg-white" />
            
                <input type="text" name="email" defaultValue={email} onBlur={handleChange}  placeholder="Email" className="input w-full my-2 bg-white" />

                <input type="text" name="artist" placeholder="Name of Preferred Artist" defaultValue={artist} onBlur={handleChange} className="input w-full my-2 bg-white" />
            
                <textarea name="message" defaultValue={ message } onBlur={handleChange} className="textarea w-full bg-white my-2" placeholder="Brief description of tattoo idea and style"></textarea>
                {errorMessage && (
                    <label class="label">
                        <span className="label-text text-red-300">{errorMessage}</span>
                    </label>
                )}
                
                <input type="submit" className="btn btn-secondary w-full" value={"Submit"}/>
                </form>
                {successMessage && (
                    <div className="alert alert-success shadow-lg my-4">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{successMessage}</span>
                    </div>
                  </div>
                )}
            </div>
            </div>

                <div>
                <h1 className="logo text-white text-center text-4xl">FAQs</h1>
                    <div className="flex flex-wrap justify-center">
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">How much do you charge?</h2>
                            <p>Pricing varies on the time it takes to do the tattoo. To inquire aboout specific pricing, you will need to contact artist and go through their individual booking process, which can be done through booking form or contacting artist via their instagram direct message.</p>

                            <h2 className="card-title">What do I need to do to schedule my tattoo?</h2>
                            <p>All of our artists require a NON-REFUNDABLE deposit that varies in cost by artist. The deposit amount will be added to the amount of the tattoo.</p>

                            <h2 className="card-title">When will I see my design?</h2>
                            <p>Designs are created the day of the tattoo or the night before your appointment date. Seeing your custom design varies by artist.</p>
                            <h2 className="card-title">How do I tip my tattoo artist?</h2>
                            <p>Tips are never expected, but ALWAYS appreciated.</p>

                            <h2 className="card-title">How soon can you get me in?</h2>
                            <p>Artist availability varies by artist. Make sure to follow our artists social media pages and subscribe to our email list for special events.</p>

                            <h2 className="card-title">How to be prepared for my appointment?</h2>
                            <ul>
                                <li>Eat prior to your tattoo appointment</li>
                                <li>Don't arrive drunk or high</li>
                                <li>Minimum of ONE guest with you at your tattoo appointment</li>
                            </ul>
                
                        </div>
                    </div>

                    </div>
                </div>

        </div>
    );
}

export default Booking