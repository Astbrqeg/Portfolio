import '../../App.css';
import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img from "../../img/contact-img.svg";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_nok6duj",
                "template_09x0usa",
                form.current,
                "REYvR7rbg7fLl9VpA"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className='Contact' >
            <div className='conreg' id='contact'>
                <div className='content'>
                    <h1>Contact Me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" required />
                        <label>Message</label>
                        <textarea name="message" required />
                        <input type="submit" value="Send" />
                    </form>

                </div>
                <div className='lastimg'>
                    <img src={img} alt="Header Img" />
                </div>
            </div>
        </div>
    )
}

export default Contact;