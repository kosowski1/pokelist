import React, {useState, useEffect} from 'react';

function Pokepic(props){
    const [pokepic, setPokepic] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const response = await fetch(props.pokeUrl)
            const pokepic = await response.json();
            setPokepic(pokepic.sprites);
            console.log(pokepic.sprites);
        }

        fetchData();
    }, [])

    return(
        <div>
           <img src={pokepic.front_default}/>
        </div>
    )
}

export default Pokepic;

