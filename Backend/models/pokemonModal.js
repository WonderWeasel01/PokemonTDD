import axios from 'axios';

// Hent Pokémon-data fra PokeAPI
const fetchPokemon = async (pokemonName) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = response.data;

    return {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map(typeInfo => typeInfo.type.name),
        abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name),
    };
};

export default fetchPokemon; // Ændrer til default eksport
