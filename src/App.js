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
import PostPage from './containers/blog/post'
import EditorPage from './containers/blog/editor';
import EditorHeader from './components/header/EditorHeader';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/editor">
            <EditorHeader />
            <EditorPage />
            <Footer />
          </Route>
          <Route path="/post">
            <PageHeader />
            <PostPage />
            <Footer />
          </Route>
          <Route path="/about">
            <PageHeader />
            <AboutPage />
            <Footer />
          </Route>
          <Route path="/contact">
            <PageHeader />
            <Contact />
            <Footer />
          </Route>
          <Route path="/login">
            <p>Login page</p>
          </Route>
          <Route path="/">
            <PageHeader />
            <HomePage />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
