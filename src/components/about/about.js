import React from 'react';

import './about.css'

export default class About extends React.Component {
	render() {
		return (
			<div className="content">
				<div className='contact'>
					<div className='contact-header'>
						<h2>Contact</h2>
					</div>
					<div className='contact-field'>
						<p>Email</p>
						<p className='contact-field-email'>dubei@ucu.edu.ua</p>
					</div>
					<div className='contact-field'>
						<p>LinkedIn</p>
						<a href="https://www.linkedin.com/in/marian-dubei-575a22184">Marian Dubei</a>
					</div>
					<div className='contact-field'>
						<p>GitHub</p>
						<a href="https://www.github.com/MarianDubei">Marian Dubei</a>
					</div>
					<div className='contact-field'>
						<p>Twitter</p>
						<a href="https://twitter.com/MarianDubei">Marian Dubei</a>
					</div>
				</div>
			</div>
		);
	}
}