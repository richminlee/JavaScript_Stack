import React from 'react';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
            <PersonCard firstName= {"Richard"} lastName = {"Lee"} age = {33} hairColor = {"Black"}/>
            <PersonCard firstName= {"Manilyn"} lastName = {"Lee"} age = {32} hairColor = {"Black"}/>
            <PersonCard firstName= {"Julia"} lastName = {"Lee"} age = {8} hairColor = {"Black"}/>
            <PersonCard firstName= {"Chari"} lastName = {"Lee"} age = {5} hairColor = {"Black"}/>
          </div>
  );
}

export default App;
