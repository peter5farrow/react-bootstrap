import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function MainNav({ brand, leftLinks, rightLinks }) {
  return (
    // <nav>
    //   <a href="/">{brand}</a>
    //   <ul>
    //     {leftLinks.map(({ url, text }) => (
    //       <li key={text}>
    //         <a href={url}>{text}</a>
    //       </li>
    //     ))}
    //   </ul>
    //   <ul>
    //     {rightLinks.map(({ url, text }) => (
    //       <li key={text}>
    //         <a href={url}>{text}</a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>

    <Navbar expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand href="/">{brand}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {leftLinks.map(({ url, text }, index) => (
              <Nav.Link key={index} href={url}>
                {text}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            {rightLinks.map(({ url, text }, index) => (
              <Nav.Link key={index} href={url}>
                {text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
