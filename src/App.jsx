import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience'
import Project from './pages/projects'
import Hobby from './pages/hobby'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/experience" element={<Experience />}> </Route>
        <Route path="/projects" element={<Project />}> </Route>
        <Route path="/hobbies" element={<Hobby />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
