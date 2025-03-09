import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import PaymentSolution from './Components/PaymentSolution';
import PaymentOptions from './Components/PaymentOptions';
import ModernServices from './Components/ModernServices';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';
import { Home } from "./Components/Home";
import { Utility } from "./Components/Utility";
import { School } from "./Components/School";
import { Login } from "./Components/Login";
import { SignupComponent } from "./Components/SignupComponent";

// Remove the curly braces

function App() {
  return (
    <Router>  {/* ✅ Wrap everything inside <Router> */}
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/utility" element={<Utility />} />
          <Route path="/school" element={<School />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupComponent />} />
        </Routes>
 
      </div>
    </Router>
  );
}

export default App;
