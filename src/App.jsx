import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import PokemonCards from './components/PokemonCards'
import PokemonDetails from './components/PokemonDetails'


function App() {


  return (
    <HashRouter>
      <div className="App">

        <Routes>

          <Route path='/' element={<Login />} />
          <Route element={<ProtectedRoutes />} >
          <Route  path="/pokemonsCards" element={<PokemonCards/>}/>
          <Route path='/pokemonsCards/:id' element={<PokemonDetails />}/>


          </Route>


        </Routes>




      </div>
    </HashRouter>
  )
}

export default App
