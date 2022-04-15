import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages';
import SignIn from './Pages/SignIn';
function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/signin" element={<SignIn />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
