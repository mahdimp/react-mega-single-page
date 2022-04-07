import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router className="App">
      <Navbar/>
      <Sidebar/>
    </Router>
  );
}

export default App;
