import React from 'react'
import Vertical from './flexbetween/vertical'
import Vertical1 from './flexbetween/vertical1'
import Horizontal from './flexbetween/horizontal'
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';


const Contact = () => {
  return (
    <div style={{height:'40rem',width:'100%' ,display:'flex',}}>
      
      <div className="left" style={{width:"50%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>

      <Form style={{background:"white",textAlign:"left",padding:"4rem",borderRadius:"13px"}}>
        <h2 style={{textAlign:"left"}}>Contact Us</h2>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" /> */}
        <TextField style={{width:"80%"}} id="standard-basic" label="Name" variant="standard" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" /> */}
        <TextField style={{width:"80%"}} id="standard-basic" label="Email" variant="standard" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" /> */}
        <TextField style={{width:"80%"}} id="standard-basic" label="Message" variant="standard" />
      </Form.Group>
      <Button variant="contained"  color="secondary" type="submit">
        Contact
      </Button>
    </Form>
      </div>

      <div className="right" style={{background:"#fcecbd", height:"100%",width:"50%", color:"white",display:"flex", flexDirection:'column', justifyContent:"center", alignItems:"flex-start",padding:"2rem"}}>
            <h1 style={{color:"purple"}}>Info</h1>
            <LocalPhoneIcon style={{color:"purple"}} /> <p style={{color:"purple"}}>95034580354</p>
            <BusinessIcon style={{color:"purple"}} /> <p style={{color:"purple"}}>Mumbai</p>

      </div>
    </div>
  )
}

export default Contact
