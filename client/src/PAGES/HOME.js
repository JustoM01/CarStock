import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
const logo = require('./utils1/Logo.png')

const HOME = () => {
  return (
    <div style={{display:'inline-flex', marginBottom:'90px'}}>


<Navbar style={{ backgroundColor: '#0d47a1', color: 'white' , height:'8vh'}} variant="dark"  fixed='top'>
      <Container>
        <Navbar.Brand style={{marginTop:'6px'}} href="#home"><img
              alt=""
              src={logo}
              width="160"
              height="150"
              className="d-inline-block align-top"
            /></Navbar.Brand>
        


        <Container>
       <Dropdown >
       <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          More
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
       </Dropdown>
      </Container>
           
     
      </Container>
  


            <Form style={{display:'inline-flex', marginRight:'3px'}}>
            <Form.Control type="text" placeholder="Search" className="mr-sm-4" />
            <Button>Search</Button>
          </Form>
    </Navbar>

    </div>
  )
}

export default HOME