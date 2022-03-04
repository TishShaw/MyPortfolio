import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
		<Card className='quote-card-view' id='#aboutt'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						I'm a passionate Software Engineer from Columbia, MD that enjoys
						learning new things and using programmimg languages like javascript
						and python to create awesome user experiences.
						<br />
						I have some experience creating custom websites with ReactJs,
						JavaScript, HTML5, CSS3, ReactJs, Javascript, Python, Node.js,
						MongoDB, Express, PostgresSQL, and Django.
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className='about-activity'>
							<ImPointRight /> Playing Games
						</li>

						<li className='about-activity'>
							<ImPointRight /> Travelling
						</li>
						<li className='about-activity'>
							<ImPointRight /> Watching Movies
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
