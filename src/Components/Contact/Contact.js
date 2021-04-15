import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import api from '../../api';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
            emailjs.sendForm('gmail', api.TEMPLATE_ID, e.target, api.USER_ID)
            .then(result => {
            alert('Message Sent, I\'ll get back to you shortly', result.text);
            },
            error => {
            alert( 'An error occured, Plese try again',error.text)
            })
        setName('');
        setEmail('');
        setMessage('');


        
    }



    

    return(
        <>
            <div className="contact">
                <form className="box" onSubmit={handleSubmit}>
                    <h1>Contact</h1>
                    <input type="text" name="name" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <textarea
                        placeholder="Your Message"
                        type="text"
                        name="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button style={{color: "white"}}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact;