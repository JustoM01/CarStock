import React from 'react'
import './utils/Filter.css'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
const Filter = () => {
    
  return (
    <div className='main-filter' style={{  width:'20%', display:'inline-block'}} >
       <form  className='form' >
       <div className='input-container'>
          <TextField
            label="Make"
            name="make"
            className='input'
          />
        </div>
        <div className='input-container'>
          <TextField
            label="Model"
            name="model"
            className='input'
          />
        </div>
        <div className='input-container'>
          <TextField
            label="Year"
            name="year"
            className='input'
          />
        </div>
        <div className='input-container'>
          <TextField
            label="Price Range"
            name="priceRange"
            className='input'
          />
        </div>
      <Button variant="contained" type="submit">Apply Filter</Button>
    </form>

    <div className='signup' >
a
    </div>
  
    </div>
  )
}

export default Filter