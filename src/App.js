import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { MdFormatListNumbered } from 'react-icons/md';
function App() {
  const[theme,setTheme]=useState(false)
  const style = {
    light: {
    
      background:"white",
    },
    dark: {
     
      background: "#1A202C",
    
    }
  };

  const handleClick=()=>{
    setTheme(theme === false ? true : false);
  }
 
  return (
    <div className="App" > 
<div style={theme === false ? style.dark : style.light}>
      <Navbar handleClick={handleClick} theme={theme} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}

export default App;
