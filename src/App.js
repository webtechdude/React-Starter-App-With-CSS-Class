import './index.css';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Container from './components/Container';
import { useState } from 'react';



function App() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState();
  if (isDarkModeEnabled) {
    document.body.className = "dark";
  } else if (!isDarkModeEnabled) {
    document.body.className = "light";
  }

  const handleClick = () => {
    isDarkModeEnabled
      ? setIsDarkModeEnabled(false)
      : setIsDarkModeEnabled(true);
  }

  return (
    <>
      <Navbar handleClick={handleClick} isDarkModeEnabled={isDarkModeEnabled}  />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/container' element={<Container />} />
      </Routes>
    </>
  );
}

export default App;
