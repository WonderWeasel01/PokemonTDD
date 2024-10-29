// Fejlbehandler middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Der opstod en fejl' }); 
};

export default errorHandler;

