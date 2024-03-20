import React from 'react'
import './/utils/Budget.css'
import Container from 'react-bootstrap/esm/Container'
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

const Budget = () => {
  
  const [budget, setBudget] = React.useState(5000); // Initial value set to 5000

  const handleChange = (event, newValue) => {
    setBudget(newValue);
  };

  return (
    <div style={{}} className='main-Budget'>
       
         <Container>
         <Typography style={{fontSize:'30px', textAlign:'center'}} >By Budget</Typography>
         <Typography id="range-slider" style={{color:'black'}} gutterBottom>
          Budget Range
        </Typography>
        <Slider
          className='slider'
          value={budget}
          onChange={handleChange}
          min={1000} // Minimum value
          max={50000} // Maximum value
          step={1000} // Step size
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
        <Button variant="primary" style={{backgroundColor:'gray', color:'white'}}>Search</Button>
      </Container>

    </div>
  )
}

export default Budget