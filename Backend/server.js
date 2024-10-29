import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './swagger.js';

const port = process.env.PORT || 3000;
const server = process.env.SERVER || "localhost";

const app = express(); 


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 

app.use('/api/pokemon', userRoutes);

app.use(errorHandler); 

app.listen(port, () => 
    console.log(`Server is running on http://localhost:${port}/api-docs`)
);

export default app;
