import React, {useEffect, useState} from 'react';
import {init, send, sendForm} from "@emailjs/browser";


export const Contact = () => {
	const [contactForm, setContactForm] = useState({
		name: '',
		email: '',
		topic: '',
		message: '',
	});
	let templateParams = {
		name: contactForm.name,
		email: contactForm.email,
		topic: contactForm.topic,
		message: contactForm.message,
	}
	useEffect(() => {
		init(
			{
				serviceId: process.env.REACT_APP_API_EMAILJS_SERVICE_ID,
				templateId: 'template_b54056f',
				userId: process.env.REACT_APP_API_EMAILJS_KEY_PUBLIC,
			});
	}, []);

	function handleSubmit(event) {
		event.preventDefault();
		send(process.env.REACT_APP_API_EMAILJS_SERVICE_ID, 'template_b5405', templateParams)
			.then(response => {
				console.log('Envío exitoso', response.status, response.text)
			})
			.catch((error) => {
				console.error('ERROR', error);
			});
		document.getElementById('infoSubmitted').reset();
	}

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
				<textarea placeholder="Mensaje"
						  onChange={e => setContactForm({...contactForm, message: e.target.value})}/>
				<button type="submit">Enviar</button>
			</form>
		</section>
	);
};