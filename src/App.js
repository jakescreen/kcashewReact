import React from 'react';
import './App.css';
import Novels from "./Components/Novels"
import Twitch from "./Components/Twitch";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="content-head">
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">KCashew's Home Page</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Web Novels</Nav.Link>
            <Nav.Link href="#pricing">Twitch</Nav.Link>
          </Nav>
        </Navbar>
        <div className="content-main">
          <Novels />
          <Twitch />
        </div>

      </div>
    );
  }
}
export default App;
