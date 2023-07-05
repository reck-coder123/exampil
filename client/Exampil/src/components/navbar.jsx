import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/Sot 2023-7-05 001614.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Horizontal from './flexbetween/horizontal';
import { useState, useEffect } from 'react';

function NAVBAR() {
  const [scrolled, SetScrolled]= useState(false);

    useEffect(()=>{
        const onScroll= ()=>{
            if(window.scrollY>100){
                SetScrolled(true)
            }
            else{
                SetScrolled(false);
            }
        }

        window.addEventListener('scroll',onScroll);
        return ()=> window.removeEventListener;
    }, [])
  return (
    <>
      <Navbar className={scrolled ? "scrolled": ""} bg="light" data-bs-theme="light" style={{margin:'0',padding:'0',top:'0'}}>
          <Navbar.Brand href="#home"><img src={logo} alt="logo" style={{height:"62px",width:"112px",margin:"0 1rem"}} /></Navbar.Brand>
          <Horizontal />
          <Horizontal />
          <Horizontal />
        <Container style={{margin:'0',padding:'0',display:"flex", alignItems:"center"}}>
          
          <Nav className="me-auto" style={{gap:"40px"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#skilpil">SkilPil</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#student_ambassadors">Student Ambassadors</Nav.Link>
            <Nav.Link href="#neet">NEET</Nav.Link>
            <Nav.Link href="#team">Our Team</Nav.Link>
          </Nav>
          <Horizontal />
          
          <Navbar.Brand href="#cart"><ShoppingCartIcon/></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NAVBAR;