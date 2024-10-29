import express from 'express';
import { getPokemonData } from '../controllers/userController.js';  // Ændret til navngivet impor

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pokémon
 *   description: API til Pokémon-data
 */

/**
 * @swagger
 * /api/pokemon/{name}:
 *   get:
 *     summary: Hent Pokémon-data
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

router.get('/:name', getPokemonData); // Rute til at hente Pokémon-data

router.get('/', (req, res) => {
    res.status(400).json({ message: 'Pokémon-navn skal angives i URL' }); // Tilføjet rute til håndtering af anmodninger uden navn
});

// Fjern Swagger opsætning fra her

// Tilføj denne funktion for at eksportere ruterne
export const setupRoutes = (app) => {
    app.use('/api', router); // Tilføj routeren til appen
};

// Eksporter routeren som standard
export default router;
