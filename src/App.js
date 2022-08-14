import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Registor from './Component/Registor';
import Home from './Component/Home';

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registor" element={<Registor />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}