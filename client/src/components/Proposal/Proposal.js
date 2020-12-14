import React, {useRef} from "react";
import axios from "axios";
import { Button, Row, Col, Form, Container} from 'react-bootstrap'



// This portion of the loginForm function is written first
    
function Proposal(){

        return (

<Container>
  <Row>
    <Col sm={8}>
            <Form>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Project Title</Form.Label>
              <Form.Control type="input" placeholder="" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Please share some context and background for your proposed research</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>


            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Please define your Research Question</Form.Label>
              <Form.Control type="input" placeholder="" />
            </Form.Group>

            {/* <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group> */}


            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
    Submit
  </Button>

          </Form>
          </Col>
        
          <Col sm={4}>sm=4</Col>
  </Row>
  </Container>
          ) 
    
        }

export default Proposal;
