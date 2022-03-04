import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import { PROJECTS } from '../../Constants';

function Projects() {
	return (
		<Container fluid className='project-section' id='project'>
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Projects </strong>
				</h1>
				
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					{PROJECTS.map((project, index) => (
						<Col md={6} className='project-card' key={index}>
							<ProjectCard
								imgPath={project.image}
								technologyUsed={project.technologyUsed}
								title={project.name}
								description={project.description}
								link={project.url}
                linkTwo={project.github}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
