import React, {useState} from 'react';
import console from "node:console";
import nodemailer from "nodemailer";

export const Contact = () => {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        topic: "",
        message: "",
    });

    const [error, setError] = useState(null);

    const handleContact = async (e) => {
        e.preventDefault();

        if (Object.values(contactForm).some(field => field === "")) {
            setError('All fields are required');
            return;
        }

        try {
            await fetch('/submit', {
                method: 'POST',
                body: JSON.stringify(contactForm),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            await sendContactInfoToMail();
            console.log('Form Submitted');
            setContactForm({
                name: "",
                email: "",
                topic: "",
                message: "",
            });

        } catch(e) {
            setError('There was an error submitting the form.');
            console.error(e);
        }
    };

    const sendContactInfoToMail = async () => {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.REACT_APP_GMAIL_ARMANDO,
                    pass: process.env.REACT_APP_PASSWORD_GMAIL_ARMANDO
                }
            });

            await transporter.sendMail({
                from: contactForm.email,
                to: process.env.REACT_APP_GMAIL_ARMANDO,
                subject: "Contact Info",
                text: Object.values(contactForm).join(", ")
            });

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section>
            <form id='infoSubmitted' onSubmit={handleContact}>
                <div id="form-h2">
                    <h2>Contacto</h2>
                </div>
                <div className={error ? 'showError' : 'hideError'}>{error}</div>
                <input type="text" placeholder="Nombre completo" value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})}/>
                <input type="email" placeholder="Email" value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})}/>
                <input type="text" placeholder="Tema" value={contactForm.topic} onChange={e => setContactForm({...contactForm, topic: e.target.value})}/>
                <textarea placeholder="Mensaje" value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})}/>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};