import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import {Banner} from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <NavBar />
      <Banner />
      </BrowserRouter>
    </div>
  );
}

export default App;
