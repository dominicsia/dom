import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Counter from './components/Counter';
import Map from './components/Map';
import Memory from './components/Memory';
import './Jor.css';
import sketchImage from './assets/sketch.png'; 

function Jor() {
  return (
    <div>
      <div className="first-section vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="auto">
              <img src={sketchImage}></img>
              <Counter />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="second-section min-vh-100 d-flex justify-content-center">
        <Container>
          <p className="text-center">And since then, we've had...</p>
          <div className="timeline">
            <Memory
              image="/src/app-jor/assets/1.jpg"
              title="Our First Date"
              text={`on 7/1/2023`}
              left={true}
            />
            <Memory
              image="/src/app-jor/assets/2.jpg"
              title={`Our First "Picture"`}
              text="at the USG Office"
              left={false}
            />
            <Memory
              image="/src/app-jor/assets/3.jpg"
              title="Our First Matchy"
              text="with our checkered flannels"
              left={true}
            />
            <Memory
              image="/src/app-jor/assets/4.jpg"
              title="Our First Kiss"
              text="on 12/23/2023"
              left={false}
            />
            <Memory
              image="/src/app-jor/assets/5.jpg"
              title="Our First Valentine's"
              text="at Pinto Art Museum"
              left={true}
            />
          </div>
        </Container>
      </div>

      <div className="third-section vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <p className="text-center">And so much more memories and awesome dates</p>
          <Map />
          <p className="text-center">And we're just getting started! <span>❤🚀</span></p>
        </Container>
      </div>
    </div>
  );
}

export default Jor;