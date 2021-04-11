import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("your entered name is "+name+" and your entered value is "+message);
        setName('');
        setEmail('');
        setMessage('');


    }

    return(
        <>
            <div className="contact">
                <form className="box" onSubmit={handleSubmit}>
                    <h1>Contact</h1>
                    <input type="text" name="" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <textarea
                        placeholder="Your Message"
                        type="text"
                        name=""
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact;