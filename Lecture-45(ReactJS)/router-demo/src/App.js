import { useState } from 'react';
import './App.css';
import About from './components/About';
import Courses from './components/Courses';
import Home from './components/Home';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  // const [item, setItem] = useState('home');


  // const homeClickHandler = (ev)=>{
  //   ev.preventDefault();
  //   setItem('home');
  // }

  // const aboutClickHandler = (ev)=>{
  //   ev.preventDefault();
  //   setItem('about');
  // }

  // const coursesClickHandler = (ev)=>{
  //   ev.preventDefault();
  //   setItem('courses');
  // }

  return (
    <div style={{ margin: '15px' }} className="App">
      <nav className="nav">
        <div className="nav-item"> 
        <Link to="home">Home</Link>
        </div>
        <div className="nav-item"> 
        <Link to="about">About</Link>
         </div>
        <div className="nav-item"> 
        <Link to="courses">Courses</Link>
         </div>
      </nav>
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="courses" element={<Courses />}></Route>
      </Routes>
      {/* <nav className="nav">
        <div className="nav-item" onClick={homeClickHandler}> Home</div>
        <div className="nav-item" onClick={aboutClickHandler}> About </div>
        <div className="nav-item" onClick={coursesClickHandler}> Courses </div>
      </nav> */}

      {/* { item === 'home' && <Home />}
      { item === 'about' && <About />}
      { item === 'courses' && <Courses />} */}


    </div>
  );
}

export default App;
