import React, {useState, useEffect} from 'react';
import Pokepic from '../Pokepic';
import Poketype from '../Poketype';
import './styles.css'

function Card(props){
    const [pokemon, setPokemon] = useState([]);
    const [filter, setFilter] = useState("");

    const handleSearchChange = (e) =>{
        setFilter(e.target.value);
    }

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0`);
            const pokemon = await response.json();
            setPokemon(pokemon.results);
            console.log(pokemon.results)
        }

        fetchData();
    }, [])
    return (
        <div>
            <div className="pokedex">
                {
                    pokemon.map((poke) =>(
                        <div className="pokemon-card">
                            <div className="pokemon-image" key={poke.id}>
                                <Pokepic pokeUrl={poke.url} />
                            </div>
                            <div className="pokemon-name">
                                <h2>{poke.name}</h2>
                            </div>
                            <div className="pokemon-types">
                                <Poketype pokeUrl={poke.url} />
                            </div>
                        </div>
                ))
                }
            </div>
        </div>
    )
}

export default Card;