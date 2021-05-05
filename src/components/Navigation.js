import React from 'react'
import {Navbar,Nav,Form,FormControl, Container}from 'react-bootstrap'
import '../App.css'

function Navigation() {
    return (
        <div>
            <Navbar className="navbarr py-2" fixed="top" expand="lg">
              <Container>
                <Navbar.Brand href="#home" className="navig"><span className="titlLogo">Movies</span><span className="titlLogo2">On</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mx-auto">
                    <Nav.Link href="#home" className="navig">Home</Nav.Link>
                    <Nav.Link href="#link" className="navig">TvShows</Nav.Link>
                    <Nav.Link href="#link" className="navig">Movies</Nav.Link>
                    </Nav>
                    <form class="search-box">
                      <i class="fas fa-search text-white iconNav"></i>
                      <input type="text" placeholder=" "/>
                      <button type="reset"></button>
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
