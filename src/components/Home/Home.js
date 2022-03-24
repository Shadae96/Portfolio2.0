import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sunil.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Shadae Brown</strong>
              </h1>

              <p className="heading-description blockquote">
              Full Stack Web Developer leveraging software sales experience to provide a customer-first approach to app development. Received a certificate in Full-Stack web development from Georgia Tech Bootcamps where I gained new skills in JavaScript, CSS, HTML, SQL, Express.js, React, and Node.js. Strengths in collaboration, adaptability, and approaching tough problems creatively. I enjoy geeking out over solving challenging technical problems, designing technical approaches, and seeing the impact of my work. Fascinated by technology and always excited to deepen my understanding of programming languages and frameworks. I’m excited to transition into a development role that allows me to offer my unique perspective and continue expanding my knowledge.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
