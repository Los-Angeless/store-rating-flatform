import React from 'react';
import './App.css' // or  if you placed Tailwind there

import { Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

export default function App() {
  return (
    <div className="App">
      <nav className="p-4 bg-gray-200 mb-4">
        <Link to="/signup" className="mr-4">Signup</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div>Welcome! Please login or signup.</div>} />
      </Routes>
    </div>
  );
}
