import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';


const Contact = () => {
  return (
    <div style={{height:'40rem',width:'100%' ,display:'flex',marginTop:"2rem"}}>
      
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
            <LocalPhoneIcon style={{color:"purple"}} /> <p style={{color:"purple"}}>9930552280</p>
            <BusinessIcon style={{color:"purple"}} /> <p style={{color:"purple"}}>Corporate Address: 1608, Lodha Supramus <br /> Powai Mumbai India</p>
            <EmailIcon style={{color:"purple"}} /> <p style={{color:"purple"}}>hello@exampil.com</p>
            <QueryBuilderIcon style={{color:"purple"}} /> <p style={{color:"purple"}}>10:00 am to 6:00 pm</p>

      </div>
    </div>
  )
}

export default Contact
