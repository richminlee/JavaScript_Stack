import React from 'react';
    
    
const ColorForm = (props) => {
    const {color, setColor} = props;
    let list = {
        colorList:"",
        height: ""
      };
    
      const onChange= (e) =>{
          {
              e.target.name === "colorList"?
              list.colorList = e.target.value:
              list.height = e.target.value
          }
      }

    const handleSubmit = (e) => {
        setColor([...color, list]);
        e.target.value="";

    };
    
    return (
        <div className="div">
            <label className="col-1 text-left">Color: </label>
            <input className="col-2 m-3 mt-5" type = "text" name="colorList"  onChange={ onChange } />
            <label className="col-2 text-left">Box Size: </label>
            <input className="col-2 mr-3 mt-5" type = "text" name="height"  onChange={ onChange } />

            <button className="btn btn-primary m-3" onClick={handleSubmit}> Add </button>
            </div>
    );
};
    
export default ColorForm;