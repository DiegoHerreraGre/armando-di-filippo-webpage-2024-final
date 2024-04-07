import React, {useEffect, useState} from 'react';
import {init, send} from "@emailjs/browser";

export const Contact =
	() => {
		/*
       * The Contact functional component.
       *
       * This component generates a contact form for users to fill out and submit. The form contains fields for the name, email, topic, and message.
       *
       * It uses react state to handle changes to these fields, and react effect to initialize EmailJS service, template and user details.
       *
       * Upon form submission, the `handleSubmit` method is invoked. This asynchronously submits the filled form contents as parameters to the EmailJS service
       * for further processing and then resets the form upon successful submission or logs an error if the sending fails.
       *
       * `handleSubmit` also displays a success alert to notify the user that the form has been successfully submitted.
       *
       * Finally, the component renders the contact form in a section.
       *
       * No parameters are received or returned by this main component function and it directly handles state and form submissions.
       */
		const [contactForm, setContactForm] = useState({
			name: '',
			email: '',
			topic: '',
			message: '',
		});

		useEffect(() => {
			init({
				blockHeadless: true,
				serviceId: process.env.REACT_APP_API_EMAILJS_SERVICE_ID,
				templateId: 'template_b54056f',
				userId: process.env.REACT_APP_API_EMAILJS_DIEGO,
				publicKey: process.env.REACT_APP_API_EMAILJS_KEY_PUBLIC,
				limitRate: {
					id: 'app',
					throttle: 20000,
				},
			});
		}, []);

		const handleSubmit = async (e) => {
			e.preventDefault();
			let templateParams = {
				name: contactForm.name,
				email: contactForm.email,
				topic: contactForm.topic,
				message: contactForm.message,
			};
			const serviceID = process.env.REACT_APP_API_EMAILJS_SERVICE_ID;
			const templateID = 'template_b54056f';
			send(serviceID, templateID, templateParams)
				.then(response => {
					console.log('SUCCESS!', response.status, response.text);
					setContactForm({
						name: '',
						email: '',
						topic: '',
						message: '',
					});
				})
				.catch(err => {
					console.error('FAILED...', err);
				});
			document.getElementById('infoSubmitted').reset();
			alert('Formulario enviado con éxito')
		};

		return (
			<section>
				<form id='infoSubmitted' onSubmit={handleSubmit}>
					<div>
						<h2>Contacto</h2>
					</div>
					<input type="text" placeholder="Nombre completo"
								 onChange={e => setContactForm({...contactForm, name: e.target.value})}/>
					<input type="email" placeholder="Email"
								 onChange={e => setContactForm({...contactForm, email: e.target.value})}/>
					<input type="text" placeholder="Tema"
								 onChange={e => setContactForm({...contactForm, topic: e.target.value})}/>
					<textarea placeholder="Mensaje" onChange={e => setContactForm({...contactForm, message: e.target.value})}/>
					<button type="submit">Enviar</button>
				</form>
			</section>
		);
	};