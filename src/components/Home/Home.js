import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeWriter from './TypeWriter';

function Home() {
	return (
		
			<Container fluid className='home-section' id='home'>
				<Container className='home-content'>
					<Row>
						<Col md={6} className='home-header'>
							<h1 style={{ paddingBottom: 15 }} className='heading'>
								Hello there,
							</h1>

							<h1 className='heading-name'>
								my name is
								<strong className='main-name'> Tishtanya Shaw</strong>
							</h1>
							
							<div className='heading-type'>
								<TypeWriter />
							</div>
						</Col>

						<Col md={5} className='home-image'>
							<img
								src='https://images.unsplash.com/photo-1625535163131-9d1fc30ea5f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80'
								alt='screen-image'
								className='home-section-image'
								
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		
	);
}

export default Home;
