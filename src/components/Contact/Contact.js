import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';

function Contact(props) {
	const [send, setSend] = useState(false);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_1lndhm1',
				'template_7oh6zma',
				e.target,
				'user_IC6A1QVAjRRCP8sAqWQdG'
			)
			.then(
				(result) => {
					console.log(result.text);
					setSend(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div className='contact-form-container'>
			<Container fluid className='home-about-section contact-title' id='about'>
				<Container>
					<Row>
						<Col md={12} className='home-about-social'>
							<h1>Get in Touch</h1>
							<p>
								{' '}
								Whether you want to get in touch, or talk about a project
								collaboration.
								<br />
								<strong>Feel free to connect with me</strong>
							</p>
						</Col>
					</Row>
				</Container>
			</Container>
			<form className='form-container' ref={form} onSubmit={sendEmail}>
				<div className='form-group '>
					<label for='fullName'>Name </label>
					<input
						name='fullName'
						type='text'
						className='form-control'
						id='fullName'
						placeholder='Enter full name'
						required
					/>
				</div>
				<div className='form-group '>
					<label for='email'>Email </label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='email'
						placeholder='Enter email'
						required
					/>
				</div>
				<div className='form-group'>
					<label for='message'>Message</label>
					<textarea
						row='10'
						cols='50'
						name='message'
						type='message'
						className='form-control'
						id='exampleInputPassword1'
						placeholder='Password'
						required
					/>
				</div>

				<input type='submit' className='btn btn-primary' value='send' />

				{send ? <p>message sent !</p> : ''}
			</form>
		</div>
	);
}

export default Contact;
