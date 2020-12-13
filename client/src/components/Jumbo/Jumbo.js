import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Button, ButtonToolbar } from 'react-bootstrap'
import FormModal from '../Modal/FormModal'


function Jumbo() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
        <Jumbotron>
        <h1>Welcome to USRA.tech</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
        <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Submit your Research Proposal
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