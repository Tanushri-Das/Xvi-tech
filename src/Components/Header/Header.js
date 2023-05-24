
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { FiSearch, FiX } from "react-icons/fi";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "./Header.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFoucs,setIsFocus]=useState(false);

  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const suggestions=["Cloud","DevOps","Build App"];
  return (
    <div className="navbar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
        className="navShadow" fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://www.xivtech.io/logo.svg"
              className="first-logo"
              alt=""
            />
            <img
              src="https://www.xivtech.io/Text.svg"
              className="second-logo"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{borderColor:'red'}}>
            <Nav className="d-flex justify-content-end flex-grow-1" style={{ paddingRight: '130px' }}>
              {/* Navigation links */}
              <Nav.Link href="#features" className="select">
                <Form.Select
                  aria-label="Default select example select-navlink"
                  style={{ color: "black",border:'none'}}
                >
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Nav.Link>

              <Nav.Link href="/career" className="nav-link" style={{ color: "black"}}>
                Careers
              </Nav.Link>
              <Nav.Link href="/about"  className="nav-link"  style={{ color: "black"}}>
                About
              </Nav.Link>
              <Nav.Link href="/contact"  className="nav-link contact"  style={{ color: "black"}}>
                Contact
              </Nav.Link>
              <Nav.Link>
              <div className={`search-bar ${isSearchOpen ? 'open' : ''}`}>
                <button className="search-icon" onClick={handleToggleSearch}>
                  {isSearchOpen ? <FiX /> : <FiSearch />}
                </button>

                <div className={`search-input-container ${isSearchOpen ? 'active' : ''}`}>
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    onFocus={()=>setIsFocus(true)}
                  />
                  {
                    isFoucs && <div className="popularSearches">
                    {
                      suggestions?.map((suggestion,index)=>{
                        return <div key={index} className="ps-5 py-3 pr-3 suggest">{suggestion}</div>
                      })
                    }
                </div>
                  }
                  
                </div>
              </div>
              </Nav.Link>
              {/* <div className={`search-bar ${isSearchOpen ? 'open' : ''}`}>
                <button className="search-icon" onClick={handleToggleSearch}>
                  {isSearchOpen ? <FiX /> : <FiSearch />}
                </button>

                <div className={`search-input-container ${isSearchOpen ? 'active' : ''}`}>
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    onFocus={()=>setIsFocus(true)}
                  />
                  {
                    isFoucs && <div className="popularSearches">
                    {
                      suggestions?.map((suggestion,index)=>{
                        return <div key={index} className="ps-5 py-3 pr-3 suggest">{suggestion}</div>
                      })
                    }
                </div>
                  }
                  
                </div>
              </div> */}
            </Nav>

            <Nav>
              <div class="rdemo">
                <div>
                  <button type="button" class="request-demo-button">
                    Let's Talk
                  </button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

