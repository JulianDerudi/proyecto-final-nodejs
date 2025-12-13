import "dotenv/config";
import express from 'express';
import cors from 'cors';
import productsRoutes from './src/routes/products-route.js';

// Configuración de la aplicación
const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('<h1>BIENVENIDO</h1>');
});



// Rutas de productos
app.use('/products', productsRoutes);


// Middleware para manejar rutas no definidas   
app.use((req, res, next) => {
  res.status(404).send('Recurso no encontrado o ruta inválida');
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


export default app;


// base de datos firestore: https://console.firebase.google.com/project/proyecto-final-nodejs-28b6e/firestore/databases/-default-/data/~2Fproducts~2FdiZIHyNY8PNsJd5OhYWN?hl=es-419