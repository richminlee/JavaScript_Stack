import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SWpeople = (props) =>{
    const[starWars, setStarWars] = useState([]);
    // const[homeworld, setHomeworld] = useState([]);
    const[error, setError] = useState("");
    let message = <div><img src="https://www.somagnews.com/wp-content/uploads/2020/01/d1-12-e1579887035290.jpg"alt = "Obi Wan Kenobi"/> <h1>"These aren't the droids you're looking for"</h1></div>
    
    useEffect(() => {
        setError("");
        axios.get(`https://swapi.dev/api/${props.cat}/${props.id}`)
        .then(response => {{console.log(response.data)}})
        // .catch(() => {setError(message)})
    }, [props.id])

// axios.get(starWars.homeworld).then(response =>{{setHomeworld(response.data)}})
    
    return (
        <div className="container">
                {error? error: <div> {<h1>{starWars.name}</h1>}
                    {`${props.cat}` === "people"? <div>Height: {starWars.height}</div>:        `${props.cat}` === "planets"? <div>Climate: {starWars.climate}</div>:            `${props.cat}` === "starships"? <div>Model: {starWars.model}</div>:""}
                    {`${props.cat}` === "people"? <div>Hair Color: {starWars.hair_color}</div>:`${props.cat}` === "planets"? <div>Terrain: {starWars.terrain}</div>:            `${props.cat}` === "starships"? <div>Passengers: {starWars.passengers}</div>:""}
                    {`${props.cat}` === "people"? <div>Eye Color: {starWars.eye_color}</div>:  `${props.cat}` === "planets"? <div>Surface Water: {starWars.surface_water}</div>:`${props.cat}` === "starships"? <div>Hyperdrive Rating: {starWars.hyperdrive_rating}</div>:""}
                    {`${props.cat}` === "people"? <div>Skin Color: {starWars.skin_color}</div>:`${props.cat}` === "planets"? <div>Population: {starWars.population}</div>:      `${props.cat}` === "starships"? <div>Starship Class: {starWars.starship_class}</div>:""}
                    </div>}
        </div>   
    )
}

export default SWpeople;