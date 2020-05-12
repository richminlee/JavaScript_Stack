import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = () =>{
    const[pokemon, setPokemon] = useState([]);
    const[submitted, setSubmitted] = useState(false);
    
    const onClick =(()=>{
        submitted === false?
        setSubmitted(true):
        setSubmitted(false);
    })
    const [responseData, setResponseData] = useState(null);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {setPokemon(response.data.results)})
    }, [])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <button onClick={onClick}>Fetch Pokemon</button>
                    <ul>{
                        submitted ?                        
                        pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                        return (<li key={index}>{pokemon.name}</li>)
                        })
                        
                        :""
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;