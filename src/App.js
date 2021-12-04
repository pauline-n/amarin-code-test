import {Navbar, Container, Nav} from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms";
import Pricing from "./components/Pricing";
import Customer from "./components/Customer";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">AMA HOTEL LTD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Rooms</Nav.Link>
            <Nav.Link href="/customers">Customers</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Router>
        <div>
          <Routes>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/customers" element={<Customer />}></Route>
            <Route path="/" element={<Rooms />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
