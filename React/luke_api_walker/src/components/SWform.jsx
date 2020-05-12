import React from 'react';
import { navigate } from '@reach/router';

const SWform = (props) =>{
    const{starWars, setStarWars} = props;
    let starwar = {
        cat:"",
        id: ""
      };
    
    const onChange= (e) =>{
        e.target.name === "cat"?
        starwar.cat = e.target.value:
        starwar.id = e.target.value
    }
  const onClick = (e) => {
      setStarWars([...starWars, starwar]);
      navigate(`/${starwar.cat}/${starwar.id}`)
      document.getElementById('cate').value = "";
      document.getElementById('idee').value = "";

  };
    return (
        <div className="container">
            <div className="row m-5">
                <div className="col-2"></div>
                <label className="col-2">Search For:</label>
                <select id="cate" style={{height:25}} name="cat" onChange={onChange}>
                    <option value="">Select One</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label className="col-1">ID:</label>
                <input id="idee" style={{height:25}} type="text" name="id" onChange={onChange}/>
                <button className="btn btn-primary ml-3" onClick={onClick}>Search</button>
            </div>
        </div>
    )
}

export default SWform;