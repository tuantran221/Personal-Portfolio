import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {

// functionto set dark mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, Setdone] = useState(false);

    //  set state of input value
    const [name, Setname] = useState('');
    const [email, Setemail] = useState('');
    const [mess, Setmess] = useState('');

    //    handle to get value input
    const handleChangeName = (event) => {
        Setname(event.target.value);
    };
    const handleChangeEmail = (event) => {
        Setemail(event.target.value);
    };
    const handleChangeMess = (event) => {
        Setmess(event.target.value);
    };

    // function to send email
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o9de93c', 'template_5hnnoon', form.current, 'QFhm93Wf8EICxx2bX').then(
            (result) => {
                console.log(result.text);
                Setdone(true);
                Setname('');
                Setemail('');
                Setmess('');
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
                </div>
            </div>

            {/* rigth side */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        className="user"
                        placeholder="Name"
                        id="nameInput"
                        onChange={handleChangeName}
                        value={name}
                    />
                    <input
                        type="email"
                        name="user_email"
                        className="user"
                        placeholder="Email"
                        id="emailInput"
                        onChange={handleChangeEmail}
                        value={email}
                    />
                    <textarea
                        name="message"
                        className="user"
                        placeholder="Message"
                        id="messInput"
                        onChange={handleChangeMess}
                        value={mess}
                    />
                    <input type="submit" value="Send" className="button" />
                    <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
                    <span>{done && 'Thanks for contact me!'}</span>
                </form>
            </div>
        </div>
    );
};

export default Contact;
