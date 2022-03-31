import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
}