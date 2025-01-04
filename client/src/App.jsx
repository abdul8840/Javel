import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <Header />
    </Router>
      
    </>
  )
}

export default App
