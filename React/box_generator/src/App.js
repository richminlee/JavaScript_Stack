import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorDisplay from './components/ColorDisplay';
import ColorForm from './components/ColorForm';

function App() {
  const [color, setColor] = useState([]);


  return (
    <div className="App">
            <ColorForm color={color} setColor={setColor} />

          {color.map((list, i) => (
            <ColorDisplay key={i} list={list}/>
            ))}
    </div>
  );
}

export default App;
