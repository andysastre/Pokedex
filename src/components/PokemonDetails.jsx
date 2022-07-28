import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from 'react';




const PokemonDetails = () => {

  const [pokemon, setPokemon] = useState({});
  const [moves, setMoves] = useState([]);
  const { id } = useParams();

const movesPag = moves.slice(0, 15)


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err.respnse))
  }, [])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setMoves(res.data.moves))

  }, [])

  const pokmBk = () => {
    if (pokemon.types?.[0]?.type.name === "grass") {
      return "darkgreen"
    } else if (pokemon.types?.[0]?.type.name === "fire") {
      return "red"
    } else if (pokemon.types?.[0]?.type.name === "electric") {
      return "#ddf505"
    } else if (pokemon.types?.[0]?.type.name === "bug") {
      return "darkolivegreen"
    } else if (pokemon.types?.[0]?.type.name === "dark") {
      return "#333"
    } else if (pokemon.types?.[0]?.type.name === "dragon") {
      return "#fa4753"
    } else if (pokemon.types?.[0]?.type.name === "fairy") {
      return "#e440bb"
    } else if (pokemon.types?.[0]?.type.name === "flying") {
      return "#8f8e8dfa"
    } else if (pokemon.types?.[0]?.type.name === "ghost") {
      return "#3c2d81fa"
    } else if (pokemon.types?.[0]?.type.name === "ground") {
      return "#7c4609fa"
    } else if (pokemon.types?.[0]?.type.name === "ice") {
      return "#09aad3fa"
    } else if (pokemon.types?.[0]?.type.name === "normal") {
      return "#2f4857fa"
    } else if (pokemon.types?.[0]?.type.name === "poison") {
      return "#8406fafa"
    } else if (pokemon.types?.[0]?.type.name === "rock") {
      return "#faa506ab"
    } else if (pokemon.types?.[0]?.type.name === "steel") {
      return "#7ad4ebf5"
    } else if (pokemon.types?.[0]?.type.name === "water") {
      return "#0833f3"
    }
  }


  console.log(moves)


  const weight = pokemon.height / 10
  const height = pokemon.height / 10




  return (

    <div>
      <div className='detail-container'>

        <div className='Card-Details'>
          <div className="card1" style={{ background: pokmBk() }}>

            <div className="card2">

              <div className='side1'>
                <h3>{pokemon.name}</h3>

                <img className='presentation' src={pokemon.sprites?.front_default} alt="" />
                <p className='Cuadricula'><b>Tipe: </b>  {pokemon.types?.[0]?.type.name}/ {pokemon.types?.[1]?.type.name}</p>
                <p><b>Ability: </b>{pokemon.abilities?.[0]?.ability.name}, {pokemon.abilities?.[1]?.ability.name}</p>



              </div>
              <div className='side2'>
                <h3>Stats</h3>
                <p><b>Health: </b>{pokemon.stats?.[0].base_stat} / 150</p>
                <p><b>Attack: </b>{pokemon.stats?.[1].base_stat} / 150</p>
                <p><b>Defense: </b>{pokemon.stats?.[2].base_stat} / 150</p>
                <p><b>Speed: </b>{pokemon.stats?.[5].base_stat} / 150</p>
                <p><b>Weight: </b>{height} kg</p>
                <p><b>Height: </b>{weight}m</p>
              </div>

            </div>

          </div>
        </div>
        <div class="card3">
          <div class="card4">
           <div className='moves-container'>
            <h3>Moves</h3>
          <div className='moves'>
            {
              movesPag.map(move=>(
                <div > <p> {"  ("} {move.move.name}{")"} </p> </div>
              ))
            }
          </div>
          </div>
            {/* {
      moves.map(move=>(
        <p>{move}</p>
      ))
    } */}
          </div>
        </div>
      </div>

    </div>



  );
};

export default PokemonDetails;



