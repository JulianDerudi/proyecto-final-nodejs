import "dotenv/config";
import express from 'express';
import cors from 'cors';
import productsRoutes from './src/routes/products-route.js';
import authRoutes from './src/routes/auth-route.js';

// Configuración de la aplicación
const app = express();
const PORT = process.env.PORT || 3005;

// Middleware CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('<h1>BIENVENIDO</h1>');
});



// Rutas de productos
app.use('/api/products', productsRoutes);

app.use('/auth', authRoutes);

// Middleware para manejar rutas no definidas   
app.use((req, res, next) => {
  res.status(404).send('Recurso no encontrado o ruta inválida');
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


export default app;


