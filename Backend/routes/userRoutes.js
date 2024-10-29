import express from 'express';
import { getPokemonData } from '../controllers/userController.js';

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

// Rute til at hente Pokémon-data
router.get('/:name', getPokemonData); 

router.get('/', (req, res) => {
    res.status(400).json({ message: 'Pokémon-navn skal angives i URL' });
});



export const setupRoutes = (app) => {
    app.use('/api', router);
};

export default router;
