import React, {useState } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import './genderInput.css';

import { FaMale } from '@react-icons/all-files/fa/FaMale';
import { FaFemale } from '@react-icons/all-files/fa/FaFemale';
const GenderInput = () => {
  const [gender, setGender] = useState();
  console.log(gender);
    return (
      <Container>
        <Form>
          <Form.Group as={Row} className="border-0">
            <Form.Label column sm="3" md="2">
              Geslacht*:
            </Form.Label>
            <Col sm="3" md="5">
              <ToggleButtonGroup
                type="radio"
                name="gender"
                value={gender}
                onChange={(val) => setGender(val === 1 ? 'Man' : 'Woman')}
            
              >
                <ToggleButton
                  value={1}
                  variant="outline-dark"
                  className="btn-gender"
                  name="male"
                  id="male"
                >
                  <FaMale color="#7f9299" className="btn-gender-icon" />
                </ToggleButton>
                <ToggleButton
                  value={2}
                  variant="outline-dark"
                  className="btn-gender"
                  name="female"
                  id="female"
                >
                  <FaFemale color="#7f9299" className="btn-gender-icon" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Col>
            <Col sm="3" md="5"></Col>
            <Col sm="3" md="5"></Col>
          </Form.Group>
        </Form>
      </Container>
    );
}

export default GenderInput;

GenderInput.propTypes = {
    
}
