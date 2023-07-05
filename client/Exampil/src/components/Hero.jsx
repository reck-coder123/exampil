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


const Hero = () => {
  return (
    <div style={{height:'40rem',width:'100%',background:"#993366",borderEndEndRadius:"40px",borderEndStartRadius:"40px", display:'flex',}}>
      <div className="left" style={{height:"100%",width:"50%", color:"white",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <div className="title" style={{fontSize:"75px", marginLeft:"4rem"}}><span style={{fontWeight:"700"}}>Crack Neet</span><span style={{fontWeight:"200"}}> 2025</span>
            <p style={{fontSize:'20px',letterSpacing:"0.1rem"}}>Rising to the top with the guidance of the best.</p></div>
            <div className="imageinfo" style={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}} >
            {/* <Horizontal /> */}
                <div className="1" style={{display:"flex",flexDirection:"column"}}>
                <img style={{height:'180px',width:"270px",borderRadius:"13px"}} src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
                <img style={{height:'200px',width:"280px",borderRadius:"13px"}} src="https://i2.wp.com/exampil.com/wp-content/uploads/2023/05/NISHANA-6-MONTHS-PLAN-scaled.jpg?fit=1536%2C864&ssl=1" alt="" />
                </div>


                <div className="2"style={{display:"flex",flexDirection:"column"}}>
                <img style={{height:'200px',width:"270px",borderRadius:"13px"}} src="https://i0.wp.com/www.exampil.com/wp-content/uploads/2023/05/Nishana-2025-1-scaled.jpg?fit=1024%2C576&ssl=1" alt="" />
                <Vertical1 />
                <img style={{height:'200px',width:"280px",borderRadius:"13px"}} src="https://i2.wp.com/www.exampil.com/wp-content/uploads/2023/05/NISHANA-2024-1-scaled.jpg?fit=1024%2C576&ssl=1" alt="" />
                </div>
                
            </div>
      </div>
      <div className="right" style={{width:"50%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>

      <Form style={{background:"white",textAlign:"left",padding:"4rem",borderRadius:"13px"}}>
        <h2 style={{textAlign:"center"}}>Align a topper guidance</h2>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" /> */}
        <TextField style={{width:"80%"}} id="standard-basic" label="Name" variant="standard" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" /> */}
        <TextField style={{width:"80%"}} id="standard-basic" label="Phone" variant="standard" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <FormGroup>
        <p>You are*</p>
        <div className="fl" style={{display:"flex"}}>
        <FormControlLabel control={<Checkbox />} label="Student" />
      <FormControlLabel control={<Checkbox />} label="Parent" />
        </div>
<br />
        <p>Appering NEET in*</p>
        <div className="fl" style={{display:"flex"}}>
        <FormControlLabel control={<Checkbox />} label="2024" />
      <FormControlLabel control={<Checkbox />} label="2025" />
      <FormControlLabel control={<Checkbox />} label="2026" />
        </div>
      
    </FormGroup>
      </Form.Group>
      <Button variant="contained"  color="secondary" type="submit">
        Align a topper Guidance
      </Button>
    </Form>
      </div>
    </div>
  )
}

export default Hero
