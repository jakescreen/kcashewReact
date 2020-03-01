import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



class App extends React.Component {
  render() {
    return (
      <div className="content-head">

        <Navbar bg="dark" variant="dark" fixed="top">

          <Navbar.Brand href="/">KCashew's Home Page</Navbar.Brand>
          <Nav className="mr-auto">
             
              <Nav.Link href="/novels">Web Novels</Nav.Link>
              <Nav.Link href="/twitch">Twitch</Nav.Link>
              
              

          </Nav>

        </Navbar>

      </div>
    );
  }
}
export default App;
