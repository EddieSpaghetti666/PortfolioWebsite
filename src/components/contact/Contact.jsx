import "./Contact.scss"
import { useState } from "react";
import emailjs from "emailjs-com"
import AboutMe from "../aboutme/AboutMe";

export default function Contact() {
    const [message,setMessage] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_opzlwak', 
        'template_kwmodap',
         e.target,
         'user_T3HDOtQRq2DCTkOqg2NXE').then(res=>{
             console.log(res);
         }).catch(err=> console.log(err));
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <AboutMe/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="user_email" placeholder="Email"/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks! I'll get back to you ASAP</span>}
                </form>
            </div>
            
        </div>
    )
}
