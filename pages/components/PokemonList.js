import Link from 'next/link';

export default function PokemonList({ pokemons }) {
  console.log("api coming", pokemons)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name}>
          <div className="border p-4 rounded shadow hover:bg-gray-100">
          {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} />  */}
            <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );

 
}


