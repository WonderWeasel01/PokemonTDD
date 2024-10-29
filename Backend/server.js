import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes.js"; // Importer bruger ruter
import errorHandler from "./middleware/errorHandler.js"; // Importer fejlbehandler
import swaggerUi from 'swagger-ui-express'; // Importer Swagger UI
import { swaggerDocs } from './swagger.js'; // Importer Swagger UI og dokumentation

const port = process.env.PORT || 3000;
const server = process.env.SERVER || "localhost";

const app = express(); // Tilføjet for at initialisere app

// Brug Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Tilføj Swagger UI

// Brug bruger ruter
app.use('/api/pokemon', userRoutes); // Tilføj ruterne under '/api/pokemon' prefix

app.use(errorHandler); // Tilføj fejlbehandler middleware

app.listen(port, () => 
    console.log(`Server is running on http://localhost:${port}/api-docs`)
);

export default app;
