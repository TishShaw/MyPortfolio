import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import { TOOLS } from "../../Constants";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              textAlign: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            
          </Col>
        </Row>
        <Row className="skill-tools-wrapper">        
          <Row className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Skills</strong> 
            </h1>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li><img src={tool} alt='' className='tool-icons'/></li>
              </ul>
            ))}
          </Row>
        </Row>
      </Container>
    </Container>
  );
}

export default About;