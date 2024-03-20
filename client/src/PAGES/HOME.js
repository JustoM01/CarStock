import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

const logo = require('./utils1/Logo.png');

const HOME = () => {
  const [value, setValue] = React.useState('Inventory');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'inline-flex', marginBottom: '120px' }}>
      <Navbar style={{ backgroundColor: 'gray', color: 'white',height:'10%' ,borderRadius:'2%', marginBottom:'30px'}} variant="dark" fixed='top'>
         
         <Container>
                  <Navbar.Brand style={{ marginTop: '6px' }} href="#home">
            <img
              alt=""
              src={logo}
              width="160"
              height="150"
              className="d-inline-block align-top"
            />
             </Navbar.Brand>
          <Container>
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab
                  value="Inventory"
                  label="Inventory"
                  sx={{ color: 'white' }} // Change color here
                />
                <Tab
                  value="Home"
                  label="Home"
                  sx={{ color: 'white' }} // Change color here
                />
              </Tabs>
            </Box>


          </Container>

          <Box style={{ display: 'inline-flex', marginRight: '3px' }} component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
            <Form.Control type="text" placeholder="Search" className="mr-sm-4" />
            <Button
            startIcon={<SearchIcon />}
             style={{backgroundColor:'gray', color:'white'}} size="large"  ></Button>
          </Box>


        </Container>
      </Navbar>
    </div>
  );
};

export default HOME;
