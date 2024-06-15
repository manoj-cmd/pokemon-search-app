export const fetchPokemonTypes = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    const data = await response.json();
    return data.results;
  };
  
  export const fetchPokemonList = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151'); // For the first 151 Pokémon
    const data = await response.json();
    return data.results;
  };
  
  export const fetchPokemonDetails = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  };

  // export const fetchPokemonDetails = async (name, index) => {
  //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon?${name}/${name.index}`);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch data');
  //   }
  //   const data = await response.json();
  //   return data;
  // };
  

 
  

 