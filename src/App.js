import React, {useState} from 'react';
// import Test from './components/Test';
import './App.css';
import Header from './components/Header';

function App() {
  const [navItem, setNavItem] = useState(0);
  return (
    <div>
      <Header navItem={navItem} />
    </div>
  );
}

export default App;
