import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialMedia from '../SocialMedia';
import TypeWriter from './TypeWriter';

function Home() {
	return (
		<section>
			<Container fluid className='home-section' id='home'>
				<Container className='home-content'>
					<Row>
						<Col md={6} className='home-header'>
							<h1 style={{ paddingBottom: 15 }} className='heading'>
								Hello,{' '}
							</h1>

							<h1 className='heading-name'>
								I'm
								<strong className='main-name'> Tishtanya Shaw</strong>
							</h1>
							<p className='heading-description blockquote'>
								I am passionate about learning and using programmimg languages
								like javascript and python to create awesome user experiences.
							</p>
							<div className='heading-type'>
								<TypeWriter />
							</div>
						</Col>

						<Col md={5}></Col>
					</Row>
				</Container>
				<Container fluid className='home-about-section' id='about'>
					<Container>
						<Row>
							<Col md={12} className='home-about-social'>
								
							</Col>
						</Row>
					</Container>
				</Container>
			</Container>
		</section>
	);
}

export default Home;
