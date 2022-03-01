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
								Hello,
							</h1>

							<h1 className='heading-name'>
								my name is
								<strong className='main-name'> Tishtanya Shaw</strong>
							</h1>
							<p className='heading-description blockquote'>
								I'm a passionate Software Engineer that enjoys learning new
								things and using programmimg languages like javascript and
								python to create awesome user experiences.
							</p>
							<div className='heading-type'>
								<TypeWriter />
							</div>
						</Col>

						<Col md={5} className='homeImage'>
							<img
								src='https://images.unsplash.com/photo-1625535163131-9d1fc30ea5f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80'
								alt='screen-image'
							/>
						</Col>
					</Row>
				</Container>
				{/* <Container fluid className='home-about-section' id='about'>
					<Container>
						<Row>
							<Col md={12} className='home-about-social'>
								
							</Col>
						</Row>
					</Container>
				</Container> */}
			</Container>
		</section>
	);
}

export default Home;
