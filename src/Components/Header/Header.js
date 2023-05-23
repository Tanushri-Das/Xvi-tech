// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import { FiSearch, FiX } from "react-icons/fi";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import "./Header.css";

// const Header = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const handleToggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   return (
//     <>
//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         bg="white"
//         variant="white"
//         className=" navShadow"
//       >
//         <Container>
//           <Navbar.Brand href="/">
//             <img
//               src="https://www.xivtech.io/logo.svg"
//               className="first-logo"
//               alt=""
//             />
//             <img
//               src="https://www.xivtech.io/Text.svg"
//               className="second-logo"
//               alt=""
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="d-flex justify-content-end flex-grow-1" style={{ paddingRight: '130px' }}>
//   {/* Navigation links */}
//   <Nav.Link href="#features" style={{ color: "black" }}>
//     <Form.Select
//       aria-label="Default select example"
//       style={{ border: "none" }}
//     >
//       <option>Select</option>
//       <option value="1">One</option>
//       <option value="2">Two</option>
//       <option value="3">Three</option>
//     </Form.Select>
//   </Nav.Link>

//   <Nav.Link href="#features" style={{ color: "black" }}>
//     Careers
//   </Nav.Link>
//   <Nav.Link href="#pricing" style={{ color: "black" }}>
//     About
//   </Nav.Link>
//   <Nav.Link href="#pricing" style={{ color: "black" }}>
//     Contact
//   </Nav.Link>

//   <div className={`search-bar ${isSearchOpen ? 'open' : ''}`}>
//     <button className="search-icon" onClick={handleToggleSearch}>
//       <FiSearch />
//     </button>

//     <div className={`search-input-container ${isSearchOpen ? 'active' : ''}`}>
//       <input
//         type="text"
//         placeholder="Search"
//         className="search-input"
//       />
//       <button className="close-icon" onClick={handleToggleSearch}>
//         <FiX />
//       </button>
//     </div>
//   </div>
// </Nav>



//             <Nav>
//               <div class="rdemo">
//                 <div>
//                   <button type="button" class="request-demo-button">
//                     Let's Talk
//                   </button>
//                 </div>
//               </div>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
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

  const suggestions=["React","Html","Css"];
  return (
    <>
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
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-end flex-grow-1" style={{ paddingRight: '130px' }}>
              {/* Navigation links */}
              <Nav.Link href="#features" className="select" style={{ color: "black" }}>
                <Form.Select
                  aria-label="Default select example"
                  style={{ border: "none" }}
                >
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Nav.Link>

              <Nav.Link href="#features" className="nav-link" style={{ color: "black" }}>
                Careers
              </Nav.Link>
              <Nav.Link href="#pricing"  className="nav-link" style={{ color: "black" }}>
                About
              </Nav.Link>
              <Nav.Link href="#pricing"  className="nav-link" style={{ color: "black" }}>
                Contact
              </Nav.Link>

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
                {/* <div className="popularSearches">
                      {
                        suggestions?.map((suggestion,index)=>{
                          return <div key={index} className="p-2 suggest">{suggestion}</div>
                        })
                      }
                  </div> */}
              </div>
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
    </>
  );
};

export default Header;


// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import { FiSearch, FiX } from "react-icons/fi";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import "./Header.css";

// const Header = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   const [searchSuggestions, setSearchSuggestions] = useState([]);

//   const handleToggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const handleSearchInputChange = (e) => {
//     const value = e.target.value;
//     setSearchValue(value);

//     // Call the getSearchSuggestions function to fetch search suggestions
//     const suggestions = getSearchSuggestions(value);
//     setSearchSuggestions(suggestions);
//   };

//   const handleSearchInputClear = () => {
//     setSearchValue("");
//     setSearchSuggestions([]);
//   };

//   const handleSearchSuggestionClick = (suggestion) => {
//     setSearchValue(suggestion);
//     setSearchSuggestions([]);
//   };

//   // Placeholder for the actual search suggestions logic
//   const getSearchSuggestions = (input) => {
//     // Perform your search suggestions logic here
//     // This is just a dummy implementation, you should replace it with your own logic

//     const suggestions = [
//       "Search suggestion 1",
//       "Search suggestion 2",
//       "Search suggestion 3",
//     ];

//     // Filter the suggestions based on the input value
//     const filteredSuggestions = suggestions.filter((suggestion) =>
//       suggestion.toLowerCase().includes(input.toLowerCase())
//     );

//     return filteredSuggestions;
//   };

//   return (
//     <>
//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         bg="white"
//         variant="white"
//         className="navShadow"
//       >
//         <Container>
//           <Navbar.Brand href="/">
//             <img
//               src="https://www.xivtech.io/logo.svg"
//               className="first-logo"
//               alt=""
//             />
//             <img
//               src="https://www.xivtech.io/Text.svg"
//               className="second-logo"
//               alt=""
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="d-flex justify-content-end flex-grow-1" style={{ paddingRight: '130px' }}>
//               {/* Navigation links */}
//               <Nav.Link href="#features" style={{ color: "black" }}>
//                 <Form.Select
//                   aria-label="Default select example"
//                   style={{ border: "none" }}
//                 >
//                   <option>Select</option>
//                   <option value="1">One</option>
//                   <option value="2">Two</option>
//                   <option value="3">Three</option>
//                 </Form.Select>
//               </Nav.Link>

//               <Nav.Link href="#features" style={{ color: "black" }}>
//                 Careers
//               </Nav.Link>
//               <Nav.Link href="#pricing" style={{ color: "black" }}>
//                 About
//               </Nav.Link>
//               <Nav.Link href="#pricing" style={{ color: "black" }}>
//                 Contact
//               </Nav.Link>

//               <div className={`search-bar ${isSearchOpen ? 'open' : ''}`}>
//                 <button className="search-icon" onClick={handleToggleSearch}>
//                   {isSearchOpen ? <FiX /> : <FiSearch />}
//                 </button>

//                 <div className={`search-input-container ${isSearchOpen ? 'active' : ''}`}>
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="search-input"
//                     value={searchValue}
//                     onChange={handleSearchInputChange}
//                     onFocus={() => setIsSearchOpen(true)}
//                     onBlur={() => setIsSearchOpen(false)}
//                   />

//                   {isSearchOpen && searchSuggestions.length > 0 && (
//                     <ul className="search-suggestions">
//                       {searchSuggestions.map((suggestion, index) => (
//                         <li
//                           key={index}
//                           onClick={() => handleSearchSuggestionClick(suggestion)}
//                         >
//                           {suggestion}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             </Nav>

//             <Nav>
//               <div className="rdemo">
//                 <div>
//                   <button type="button" className="request-demo-button">
//                     Let's Talk
//                   </button>
//                 </div>
//               </div>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Header;

