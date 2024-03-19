import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './utils1/Main.css'
import Featured from '../Components/Featured'
import Budget from '../Components/Budget'
const Main = () => {
  return (
    <div style={{ width:'90%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginLeft:'5%' ,}}>
        
        <Container className='main' >
           <div className='Hero'>
            <p style={{textAlign:'center', color:'white', fontSize:'40px', textShadow:'1px 1px 1px 1px'}} >Americas #1 peer to peer car Market</p>
           </div>
        </Container>
    <div  className='Value'>
  
        <div className='child' style={{float:'left'}}>
          <h1> Why Us?</h1>

          <ul>
  <li>Wide Selection: Browse through a diverse range of vehicles from trusted sellers.</li>
  <li>Verified Sellers: Rest assured knowing that all sellers on our platform are verified and reputable.</li>
  <li>Transparent Transactions: Enjoy transparent transactions with no hidden fees or surprises.</li>
  <li>Easy Search: Easily find the car you're looking for with advanced search filters and options.</li>
  <li>Secure Transactions: Your transactions are secure, with built-in safeguards to protect your privacy and finances.</li>
  <li>Community Support: Join a community of car enthusiasts and experts who are passionate about helping you find the perfect ride.</li>
</ul>

       </div>


       <div className='child' style={{float:'right'}}>
       <h1>
        Sign Up
       </h1>

       </div>



    </div>

    <Featured></Featured>
    <Budget></Budget>

    </div>
  )
}

export default Main