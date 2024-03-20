import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from '@mui/material/Button';
import './utils1/Main.css';
import Featured from '../Components/Featured'
import Budget from '../Components/Budget';
import { Typography } from '@mui/material';
import Filter from '../Components/Filter';


const toyota = require('./utils1/Toyota.png')
const ford = require('./utils1/Ford.png')
const chevrolet = require('./utils1/Chevrolet.png')
const honda = require('./utils1/Honda.png')
const nissan = require('./utils1/Nissan.png')

const hero = require('./utils1/MainMain.jpg')

const Main = () => {
  return (
    <div className="main-container" >
 <Container fluid className="main-content" style={{ paddingTop: '110px', backgroundImage:`url(${hero})` }}>
 <h1 style={{ marginRight: '40%', marginTop: '10PX', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Explore Our Used Car Inventory</h1>
        <h3 style={{ marginLeft: '15%', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Find the perfect car for your needs.</h3>
        <Button className="Button" style={{ backgroundColor: 'gray', color: 'white', marginLeft: '15%', marginTop: '10px' }} size="large">Sign Up / Learn More</Button>
      </Container>

      <Featured></Featured>

      <Filter></Filter>
  
  <Container className='child' style={{ marginTop:'10px'}}>
      <Typography style={{fontSize:'30px', textAlign:'center'}} >Shop Popular Makes</Typography>
      <img src={toyota} alt='toyota' ></img>
      <img src={ford} alt='ford' ></img>
      <img src={chevrolet} alt='ford' ></img>
      <img src={honda} alt='ford' ></img>
      <img src={nissan} alt='ford' ></img>
  
     </Container>
  
  
  <Budget></Budget>
  


    </div>
  );
}

export default Main;










































