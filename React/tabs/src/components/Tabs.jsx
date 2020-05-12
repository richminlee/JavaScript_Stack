import React, {useState} from 'react';
const Tabs = () => {
    const [tab] = useState([
        {label:"Tab1", info:"Hi, I am Tab 1!"},
        {label:"Tab2", info:"Hi, I am Tab 2!"},
        {label:"Tab3", info:"Hi, I am Tab 3!"},
        ]);
    const [show, setShow] = useState("");
    const showTab =(e, value)=>{
        setShow(value);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    {tab.map((item, i) => <input className="btn btn-primary m-4" type="submit" value={item.label} onClick ={(e) => showTab(e, item.info)}/>)}
                </div>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4  border border-dark h1 m-3">{show}</div>
            </div>
        </div>
    )
}



export default Tabs;