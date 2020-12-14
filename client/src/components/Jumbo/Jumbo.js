import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Button } from 'react-bootstrap'
import FormModal from '../Modal/FormModal'
import Image from 'react-bootstrap/Image'
import "../../App.css"

function Jumbo() {
  const [modalShow, setModalShow] = React.useState(false);
    return (


        <Jumbotron>
    
        <h1>Welcome to USRA.tech</h1>
        <p>
        The Ultra-Sophisticated Research Analytics
        </p>
        <p>
        <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Submit Research Proposal
      </Button>

      <FormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
        </p>

        {/* <Modal_C /> */}


      </Jumbotron>
  
    );
  }
  
  export default Jumbo