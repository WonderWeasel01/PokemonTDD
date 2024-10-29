import fetchPokemon from '../models/pokemonModal.js'; // Importer fetchPokemon

/**
 * @swagger
 * /api/pokemon/{name}:
 *   get:
 *     summary: Hent data om Pokémon baseret på navn
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         description: Navn på Pokémon
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 id:
 *                   type: integer
 *                 height:
 *                   type: integer
 *                 weight:
 *                   type: integer
 *                 types:
 *                   type: array
 *                   items:
 *                     type: string
 *                 abilities:
 *                   type: array
 *                   items:
 *                     type: string
 *       404:
 *         description: Pokémon ikke fundet
 */

// Hent data om Pokémon baseret på navn
export const getPokemonData = async (req, res) => {
    const pokemonName = req.params.name.toLowerCase(); // Hent Pokémon-navn fra URL
    console.log(`Forsøger at hente data for Pokémon: ${pokemonName}`); // Log Pokémon-navn

    try {
        const pokemonData = await fetchPokemon(pokemonName); // Hent Pokémon-data
        res.json(pokemonData); // Send data som JSON
    } catch (error) {
        console.error(error); // Log fejl
        res.status(404).json({ message: 'Pokémon ikke fundet' }); // Håndter fejl
    }
};

export default getPokemonData; // Ændrer til default eksport
