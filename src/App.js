import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [navItem, setNavItem] = useState(0);
  return (
    <Router>
      <ScrollToTop />
      <Header navItem={navItem} />
      <Switch>
        <Route exact path="/about-me" >
          <AboutMe setNavItem={setNavItem} />
        </Route>
        <Route path="/">
          <Homepage setNavItem={setNavItem} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
