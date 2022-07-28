import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"


const PokemonItem = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
 






  useEffect(() => {
    axios.get(pokemonUrl)
      .then((res) => setPokemon(res.data))
  }, [])

 
  return (




    <div onClick={() => navigate(`/pokemonsCards/${pokemon.id}`)}>


      <div className="card" key={pokemon.url}>
        <img src={pokemon.sprites?.front_default} alt="" />
        <p className='pok-name'>{pokemon.name}</p>
        <p className='pok-name'><b>Tipo: </b>{pokemon.types?.[0]?.type.name} / {pokemon.types?.[1]?.type.name}</p>
        <div className='stats1'>
          <p className='st'><b>HP: </b>{pokemon.stats?.[0].base_stat} </p>
          <p className='st'><b>ATK: </b>{pokemon.stats?.[1].base_stat}</p>
          <div className='stats2'>
            <p className='st'><b>DFS: </b>{pokemon.stats?.[2].base_stat}{"      "}</p>
            <p className='st'><b>SPD: </b>{pokemon.stats?.[5].base_stat}</p>
            
          </div>
        </div>
      </div>




    </div>

  );
};

export default PokemonItem;