"use client"

import { useState } from 'react';
import { usePokemon } from './hooks/usePokemon';
import PokemonList from './components/PokemonList';

export default function Home() {
  const { types, pokemons } = usePokemon();
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPokemons = pokemons.filter(pokemon => 
    pokemon.name.includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mx-auto px-4 pt-4">
      <form class="max-w-md"> 
    <div className="mb-4">
      <label htmlFor="type" className="block mb-2">Select Pokémon Type:</label>
      <select id="type" className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">All Types</option>
        {types.map(type => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))}
      </select>
    </div>
    <div className="mb-4">
      
  
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input
         id="search"
         type="text"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    </div>
    </form>
    <PokemonList pokemons={filteredPokemons} />
  </div>

  );
}
