// libs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import SmoothScrollBar from './components/SmoothScrollBar';
// import ScrollToTop from './components/SrollToTop';
/**
 * App
 */
const App = () => (
  <>
    <Router>
      <NavMenu />
      {/* <ScrollToTop /> */}
      <SmoothScrollBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </SmoothScrollBar>
    </Router>
  </>
);

export default App;
