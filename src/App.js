import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import PaymentSolution from './Components/PaymentSolution';
import PaymentOptions from './Components/PaymentOptions';
import ModernServices from './Components/ModernServices';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <PaymentSolution/>
     <PaymentOptions/>
     <ModernServices/>
     <CallToAction/>
     <Footer/>
    </div>
  );
}

export default App;
