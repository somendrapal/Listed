import logo from './logo.svg';
import {useState,useEffect} from 'react'
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App({
}) {
 
  useState (() => {
   // api()
  },[])
  return (

    <div className="App">
        <Router>
        <Routes>
        <Route exact  path="/" element={<Home />}></Route>
        <Route path="/mhp" element={<Dashboard />}></Route>
        </Routes>
        </Router>
  
    </div>
  );
}

export default App;
