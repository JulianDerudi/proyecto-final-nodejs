import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>BIENVENIDO</h1>');
});


const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
];

app.get('/products', (req, res) => {
    res.json(products);
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});