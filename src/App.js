import React, {useState} from 'react';
// import Test from './components/Test';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Chess from './components/Chess';
import Footer from './components/Footer';

function App() {
  const [navItem, setNavItem] = useState(0);
  return (
    <div>
      <Header navItem={navItem} />
      <Homepage setNavItem={setNavItem} />
      {/* <AboutMe setNavItem={setNavItem} /> */}
      {/* <Chess setNavItem={setNavItem} /> */}
      <Footer />
    </div>
  );
}

export default App;
