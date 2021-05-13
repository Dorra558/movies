import React from 'react'
import {Navbar,Nav,Form,FormControl, Container}from 'react-bootstrap'
import '../App.css'
import { Link } from "react-router-dom";

function Navigation({handleChange}) {
    return (
        <div>
            <Navbar className="navbarr py-2" fixed="top" expand="lg">
              <Container>
                <Navbar.Brand href="#home" className="navig"><span className="titlLogo">Movies</span><span className="titlLogo2">On</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mx-auto">
                      <Link to="/"  className="navig">Home</Link>
                      <Link to="/about" className="navig px-3">About Us</Link>
                      <Link to="/movies" className="navig">Movies</Link>
                    </Nav>
                    
                    <form class="search-box">
                      <input type="text" placeholder="Search your movies.." onChange={handleChange  } />
                    </form>
                  
                    <i class="fas fa-heart text-white iconNav mx-4"></i>
                    <i class="fas fa-user text-white iconNav"></i>
                </Navbar.Collapse>
              </Container>
            </Navbar>         
        </div>
    )
}

export default Navigation
