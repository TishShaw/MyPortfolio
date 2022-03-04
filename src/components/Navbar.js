import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Resume from '../components/Resume/ResumeNew';
import Container from 'react-bootstrap/Container';
import { ImBlog } from 'react-icons/im';
import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
} from 'react-icons/ai';
import { Switch, FormControlLabel, CssBaseline } from '@mui/material';
import { CgFileDocument } from 'react-icons/cg';

function NavBar({ isDarkMode, toggleTheme }) {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	return (
		<Navbar
			expanded={expand}
			fixed='top'
			expand='md'
			className={navColour ? 'sticky' : 'navbar'}>
			<Container fluid>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => {
						updateExpanded(expand ? false : 'expanded');
					}}></Navbar.Toggle>
				<CssBaseline />
				<FormControlLabel
					style={{ marginTop: '10px', height: '40px' }}
					control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
					label=''
				/>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto' defaultActiveKey='#home'>
						<Nav.Item>
							<Nav.Link href='#home' onClick={() => updateExpanded(false)}>
								<AiOutlineHome style={{ marginBottom: '2px' }} /> Home
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link href='#about' onClick={() => updateExpanded(false)}>
								<AiOutlineUser style={{ marginBottom: '2px' }} /> About
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link href='#project' onClick={() => updateExpanded(false)}>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: '2px' }}
								/>{' '}
								Projects
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href='#contact' onClick={() => updateExpanded(false)}>
								<ImBlog style={{ marginBottom: '2px' }} />
								Contact me
							</Nav.Link>
						</Nav.Item>
						<div className='resume-nav-button'>
							<Resume />
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
