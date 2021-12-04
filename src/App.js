import Button from "react-bootstrap/Button";
import "./App.css";
import Rooms from './components/Rooms'

function App() {
  return (
    <div className="App">
      <h1>Welcome to AMA HOTEL</h1>
      <p>Would you like to book a room?</p>
      <Button variant="info">Book Room</Button>{" "}
      <Rooms />
    </div>
  );
}

export default App;
