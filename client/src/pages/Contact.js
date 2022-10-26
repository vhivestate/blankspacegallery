import { useState } from "react";
import { validateEmail } from "../utils/helper.js";

export const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
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
        setFormState({ name: '', email: '', message: '' });
        e.target.reset();
        setSuccessMessage('Thank you for your message! I will get back to you as soon as possible.');
        
    }

    return (
        <div className="min-h-screen bg-[#313c45] flex flex-col items-center justify-center">
            <h1 className="logo text-white text-center text-4xl">CONTACT US</h1>
            <div className="w-full py-6 md:w-4/6 my-6">
                <form onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="text" name="name" placeholder="Name" defaultValue={name} onBlur={handleChange} className="input w-full my-2 bg-white" />
            
                <input type="text" name="email" defaultValue={email} onBlur={handleChange}  placeholder="Email" className="input w-full my-2 bg-white" />
            
                <select className="select w-full  bg-white">
                <option disabled selected>Inquiry Type?</option>
                    <option>Guest Tattoo Artist</option>
                    <option>Gallery</option>
                    <option>Film</option>
                    <option>Photography</option>
                </select>


                <textarea name="message" defaultValue={ message } onBlur={handleChange} className="textarea w-full bg-white my-2" placeholder="Message"></textarea>
                {errorMessage && (
                    <label class="label">
                        <span className="label-text text-red-300">{errorMessage}</span>
                    </label>
                )}
                
                <input type="submit" className=" bn6 btn btn-active text-white w-full" value={"Submit"}/>
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
    );
}

export default Contact