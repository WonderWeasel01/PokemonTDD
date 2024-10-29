import swaggerJsDoc from 'swagger-jsdoc';
import path from 'path';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Pokémon API',
            version: '1.0.0',
            description: 'API til at hente Pokémon-data',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [
        path.join('Backend/routes/userRoutes.js'), 
        path.join('Backend/controllers/userController.js')
    ], 
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
