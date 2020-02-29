import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from './components/header/NavBar';
import Footer from './components/footer';
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/css/clean-blog.min.css"
import "./assets/vendor/fontawesome-free/css/all.min.css"
import "./assets/css/custom.min.css"
import PageHeader from './components/header/PageHeader';
import AboutPage from './containers/blog/about';
import Contact from './containers/blog/contact';
import HomePage from './containers/blog/home';

function App() {
  return (
    <div>
      <NavBar />
      <PageHeader />
      <Router>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
