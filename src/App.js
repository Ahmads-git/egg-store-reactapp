import { useState } from 'react';
import Home from './Pages';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import About from './Pages/About';
import Menu from './Pages/Menu';
import Dropdown from './Components/Dropdown';
import Contact from './Pages/Contact';


function App() {
  //Mobile Menu isOpen
  const [isOpen, setIsOpen] = useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="App relative">
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
