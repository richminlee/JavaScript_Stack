import React from 'react';
    
    
const TaskForm = (props) => {
    const {list, setList} = props;
    let task = {
        name:"",
        isComplete: false
    };
    const onChange = (e) => {
        task.name = e.target.value;
    };

    const onClick = (e)=> {
        setList([...list, task])        
        document.getElementById('taskInput').value = "";
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-3 mt-4">
                    <input onChange = {onChange} id="taskInput" type="text" name="task"/>
                </div>

                <div className="col-2 mt-4">
                    <button onClick = {onClick} className="btn btn-primary">Add Task</button>
                </div>
            </div>
        </div>
    )
};
    
export default TaskForm;