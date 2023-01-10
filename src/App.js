import React, { useEffect, useState } from "react";
import "./App.css";
import { getPokemonData } from './services/getPokemonData'
import ListOfPokemons from './components/ListOfPokemons'

function App() {
  const [pokemons, setPokemoms] = useState([]);

  useEffect(() => {
    getPokemonData().then((pokemons) => setPokemoms(pokemons));
  }, []);


  return (
    <div className="App ">
      <h1 className="text-3xl text-white">Pokedex</h1>
      <ListOfPokemons pokemons={pokemons} />
    </div>
  );
}

export default App;
