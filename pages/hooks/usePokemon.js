"use client";  // Add this line at the top of the file
import { useState, useEffect } from 'react';
import { fetchPokemonTypes, fetchPokemonList } from '../utils/api';

export const usePokemon = () => {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsdetails, setPokemonsDetails] = useState([])

  useEffect(() => {
    const fetchTypes = async () => {
      const typesData = await fetchPokemonTypes();
      setTypes(typesData);
    };

    const fetchPokemons = async () => {
      const pokemonData = await fetchPokemonList();
      setPokemons(pokemonData);
    };

   

    fetchTypes();
    fetchPokemons();
 
  }, []);

  return { types, pokemons };
};
