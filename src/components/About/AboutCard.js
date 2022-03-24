import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Shadae Brown </span>
            <span className="purple"> from Atlanta, GA.</span>
            <br />
            I'm a Full Stack Web Developer leveraging software sales experience to provide a customer-first approach to app development.
            <br />
            Received a certificate in Full-Stack web development from Georgia Tech Bootcamps where I gained new skills in JavaScript, CSS, HTML, SQL, Express.js, React, and Node.js. Strengths in collaboration, adaptability, and approaching tough problems creatively. I enjoy geeking out over solving challenging technical problems, designing technical approaches, and seeing the impact of my work. Fascinated by technology and always excited to deepen my understanding of programming languages and frameworks. I’m excited to transition into a development role that allows me to offer my unique perspective and continue expanding my knowledge.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching TV Shows
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li> */}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
