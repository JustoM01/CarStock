import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './utils/Footer.css'

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const logo = require('../PAGES/utils1/Logo.png')
const Footer = () => {
  return (
   <Container  fluid style={{ backgroundColor:'whitesmoke',  width:'100%', marginTop:'20PX' }} >
    <div className='logo'>  <img src={logo} alt='logo'></img></div>
 
    <p style={{textAlign:'center'}} >
    Company Name: BlueSky Autos
Address: 123 Main Street, Cityville, State, Country
Phone: +1 (123) 456-7890
Email: info@blueskyautos.com
Follow Us:
- Facebook: facebook.com/blueskyautos
- Twitter: twitter.com/blueskyautos
- Instagram: instagram.com/blueskyautos
- LinkedIn: linkedin.com/company/blueskyautos
    </p>

    <h2>Socials</h2>
<div style={{display:'inline',marginLeft:'44%',}} >
<InstagramIcon style={{ fontSize: 40, margin: 10 }} />
        <FacebookIcon style={{ fontSize: 40, margin: 10 }} />
        <TwitterIcon style={{ fontSize: 40, margin: 10 }} />
        <LinkedInIcon style={{ fontSize: 40, margin: 10 }} />
</div>
    
   </Container>
  )
}

export default Footer