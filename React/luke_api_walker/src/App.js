import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import SWpeople from './components/SWpeople'
import SWform from './components/SWform'

function App() {
  const[starWars, setStarWars] = useState([]);
  return (
    <div className="App">
        <SWform starWars={starWars} setStarWars={setStarWars}/>
      <Router>
        <SWpeople path="/:cat/:id"/>
      </Router>
    </div>
  );
}

export default App;
