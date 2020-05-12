import React from 'react';

const TaskDisplay = (props) => {
    const {task, i, list, setList} = props;
        const onClick = () =>{
            setList(() => {
            return list.filter(task => list.indexOf(task) != i)
            });
        };

        const onChange = () => {
            list[i].isComplete = !list[i].isComplete;
            setList([...list]);
        };
    return (
        <div className="container">
            <div className="row m-4">
                <div className="col-4 text-right">
                    {   
                        task.isComplete === true?
                        <h4 style={{textDecoration:"line-through"}}>{task.name}</h4>:
                        <h4>{task.name}</h4>
                    }
                </div>
                <div className="col-1">
                    <input onChange={onChange} type="checkbox" name="" checked={task.isComplete}/>
                </div>
                <div className="col-1">
                    <button onClick={onClick} className="btn btn-sm btn-dark">Delete</button>
                </div>
            </div>
        </div>
            
            

    )
};
    
export default TaskDisplay;