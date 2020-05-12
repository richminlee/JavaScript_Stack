import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskDisplay from './components/TaskDisplay';
import TaskForm from './components/TaskForm';

function App() {
  const [list, setList] = useState([]);

  useEffect(()=>{
    const data = localStorage.getItem('my-tier-list');
    if (data) {
      setList(JSON.parse(data));
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('my-tier-list', JSON.stringify(list))
  });

  return (
    <div className="App container" style={{ width: "800px"}}>
      <TaskForm list={list} setList={setList} />
      
      {list.map((task, i )=> (
        <TaskDisplay task={task} setList={setList} i={i} list={list}/>
      ))}
    </div>
  );
}

export default App;
