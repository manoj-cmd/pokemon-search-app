import Link from 'next/link';
import { fetchPokemonDetails } from '../utils/api';

export async function getServerSideProps(context) {
  const { name } = context.params;
  try {
    const pokemon = await fetchPokemonDetails(name);
    return { props: { pokemon } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
  }



export default function PokemonDetails({ pokemon }) {
  
  console.log("sdsadasd", pokemon)
  if (!pokemon) {
    return <p>Pokemon not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 pt-4">
      <nav className="mb-4">
        <Link href="/" className='text-blue-600'>Home</Link> &gt; {pokemon.name}
      </nav>

       
       

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className="w-full bg-customColor-dark flex justify-center items-center">
        <img className="text-center" src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    <div className="p-5 bg-customColor-light">
       
        <p className='mb-3 text-sm text-gray-700 dark:text-gray-400'> <strong>Name:</strong> {pokemon.name}</p>
         <p className='mb-3 text-sm text-gray-700 dark:text-gray-400'><strong>Type :</strong> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')} </p>
         <p className='mb-3 text-sm text-gray-700 dark:text-gray-400'><strong>Stats:</strong> {pokemon.stats.map(item => item.stat.name).join(', ')} </p>
         <p className='mb-3 text-sm text-gray-700 dark:text-gray-400'><strong>abilities:</strong> {pokemon.abilities.map(item => item.ability.name).join(', ')} </p>
         <p className='mb-3 text-sm text-gray-700 dark:text-gray-400'><strong>Some Movies:</strong> {pokemon.moves.map(item => item.move.name).join(', ')}</p>
    </div>
</div>



      
    </div>
  );
}
