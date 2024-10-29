import fetchPokemon from '../models/pokemonModal.js'; 

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
    const pokemonName = req.params.name.toLowerCase();
    console.log(`Forsøger at hente data for Pokémon: ${pokemonName}`);

    try {
        const pokemonData = await fetchPokemon(pokemonName);
        res.json(pokemonData);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Pokémon ikke fundet' });
    }
};

export default getPokemonData;
