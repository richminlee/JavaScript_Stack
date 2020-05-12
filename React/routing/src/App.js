import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Router } from '@reach/router';
import Home from './components/Home'
import Input from './components/Input'

function App() {
  return (
    <div className="App">
      <Router>
      <Input path="/:input"/>
      <Input path="/:input/:tColor/:bColor"/>
      <Home path="/home/"/>
      </Router>
    </div>
  );
}

export default App;
