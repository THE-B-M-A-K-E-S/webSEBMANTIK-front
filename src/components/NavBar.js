import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Recette cuisine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/recette">Recette</Nav.Link>
            <Nav.Link as={Link} to="/chaud">Chaud</Nav.Link>
            <Nav.Link as={Link} to="/plat">Plat</Nav.Link>
            <Nav.Link as={Link} to="/ingredient">Ingredient</Nav.Link>
            <Nav.Link as={Link} to="/difficulte">Difficulte</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </div>
  );
};

export default NavBar;


// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-default">
//         <div class="container-fluid">
//           <div class="navbar-header">
//             <a class="navbar-brand" href="#">
//               WebSiteName
//             </a>
//           </div>
//           <ul class="nav navbar-nav">
//             <li class="active">
//                 <Link to="/chaud">Chaud</Link>
//             </li>
//             <li>
//                 <Link to="/recette">Recette</Link>
//             </li>
//             <li>
//                 <Link to="/plat">Plat</Link>
//             </li>
//             <li>
//                 <Link to="/ingredient">Ingredient</Link>
//             </li>
//             <li>
//                 <Link to="/difficulte">Difficulté</Link>
//             </li>
            
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;
