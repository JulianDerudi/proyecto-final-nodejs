import express from 'express';
import cors from 'cors';

// Configuración de la aplicación
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('<h1>BIENVENIDO</h1>');
});


// Datos de ejemplo
const products = [
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 3, name: 'Producto 3', price: 300 },
];


// query params: /products?price=150
app.get('/products' , (req, res) => {
    const price = parseFloat(req.query.price);
    if (!isNaN(price)) {
        const filteredProducts = products.filter(p => p.price <= price);
        res.json(filteredProducts);
    } else {
        res.json(products);
    }
});


// path params: /products/1
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id == productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});


// Otra ruta de ejemplo
app.get('/otraCosa', (req, res) => {
    res.send('Otra cosa');
});


// Middleware para manejar rutas no definidas   
app.use((req, res, next) => {
  res.status(404).send('Recurso no encontrado o ruta inválida');
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

