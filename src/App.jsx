import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './sections/home'
import About from './sections/about'
import Experience from './sections/experience'
import Project from './sections/projects'
import Hobby from './sections/hobby'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div className="w-full">
        <section id="home" className="h-screen w-full flex items-center justify-center bg-gray-900 text-white">
          <Home />
        </section>
        <section id="about" className="h-screen w-full flex items-center justify-center bg-gray-800 text-white">
          <About />
        </section>
        <section id="experience" className="h-screen w-full flex items-center justify-center bg-gray-700 text-white">
          <Experience />
        </section>
        <section id="projects" className="h-screen w-full flex items-center justify-center bg-gray-600 text-white">
          <Project />
        </section>
        <section id="hobbies" className="h-screen w-full flex items-center justify-center bg-gray-600 text-white">
          <Hobby />
        </section>
      </div>
    </div>
  );
}

export default App;
