import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import PokemonItem from './PokemonItem';


const PokemonCards = () => {

    const user = useSelector((state) => state.user)



    const [pokemons, setPokemons] = useState([]);
    const [pkmSearch, setPkmSearch] = useState("");
    const [types, setTypes] = useState([]);
    const [page, setPage] = useState(1);
    
    const lastIndex = page * 20;
    const firstIndex = lastIndex - 20
    const lastPage = Math.ceil(pokemons.length / 20)
    const pokemonsPag = pokemons.slice(firstIndex, lastIndex)
    
    const numbers = [];
    for(let i=1; i<=lastPage; i++){
        numbers.push(i)
    }
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0")
            .then(res => setPokemons(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
        .then(res=> setTypes(res.data.results))
    }, [])

   

    const search = e =>{
        e.preventDefault();
        navigate(`/pokemonsCards/${pkmSearch}`)

    }

    const filterType = e =>{
        axios.get(e.target.value)
            .then(res=>setPokemons(res.data.pokemon))

    }
    
 
    return (
        <div className='Absolute-Container'>
            <div className='Header-List'>
                <h3 className='login-title'>Welcome, {user}!</h3>
                <br />
                <p className='login-title'>What pokemon are you looking for?</p>
               <div className='search-filter'>
              <div className='sea'>
                <form 
                 onSubmit={search}
                 >
                 
                 <input type="text"className='input' 
                 value={pkmSearch}
                 onChange={e=>setPkmSearch(e.target.value)}
                 />
                 <button className='but'>
                    search
                 </button>
                </form>
                </div>
                <select onChange={filterType}>
                    <option value="1">Choose the type</option>
              
               {
                types.map((type)=>(
                    <option value={type.url} key={type.url}>{type.name}</option>
                ))
               }
                </select>
                </div>
              
              
            </div>

            <div className='container'>
                {
                    pokemonsPag.map(pokemon => (
                        <div>

                            <PokemonItem 
                            pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            
                            />
                        </div>
                    ))
                }

            </div>

            <div className='pagination'>
            <button className='pag' onClick={()=>setPage(page - 1)} disabled={page===1}>
                Previous Page</button>
            
            {numbers.map(number=>(
                <button className='pag' onClick={()=>setPage(number)}>
                    {number}
                    </button>
            ))}
            <button className='pag' onClick={()=>setPage(page + 1)} disabled={page ===lastPage}>
                Next Page</button>
            </div>


        </div>

    );
};

export default PokemonCards;