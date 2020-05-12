import React from 'react';

const ColorDisplay = (props) => {
    const {list} = props;

    return (
        <div className="container">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10"> 
                            <div style={{ display: "inline-block", width:Number(`${list.height}`) , backgroundColor: `${list.colorList}`, height: Number(`${list.height}`)}} className="square m-2"></div>
                </div>
            </div>
        </div>

    )
};
    
export default ColorDisplay;
// 

                

