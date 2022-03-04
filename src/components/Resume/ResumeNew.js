import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import pdf from '../../Assets/Tishtanya-Shaw-resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div id='resume'>
			<Button
				variant='primary'
				href={pdf}
				target='_blank'
				className='download-button'>
				<AiOutlineDownload />
				&nbsp;Resume
			</Button>
		</div>
	);
}

export default ResumeNew;
