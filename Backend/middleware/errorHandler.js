// Fejlbehandler middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log fejl til konsollen
    res.status(500).json({ message: 'Der opstod en fejl' }); // Send fejlmeddelelse til klienten
};

export default errorHandler; // Eksporterer fejlbehandleren

