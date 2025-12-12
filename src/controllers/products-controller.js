import productService from '../services/products-service.js';


export const getProducts = (req, res) => {
    const price = parseFloat(req.query.price);
    if (!isNaN(price)) {
        const filteredProducts = productService.getProductsByPrice(price);
        res.json(filteredProducts);
    } else {
        res.json(productService.getProducts());
    }
} 

export const getProductById = (req, res) => {
    const { id } = req.params;
    const product = productService.getProductById(parseInt(id, 10));
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
};

export const createProduct = (req, res) => {
    if (typeof req.body.name !== 'string' || typeof req.body.price !== 'number') {
        res.status(400).json({ message: 'El nombre del producto debe ser una cadena de texto y el precio un número' });
        return;
    }
    const { name, price } = req.body;
    const product = productService.addProduct({ name, price });
    res.status(201).json({ message: 'Producto creado correctamente', product });
}

export const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const updated = productService.updateProduct(parseInt(id, 10), { name, price });
    if (updated) {
        res.status(200).json({ message: 'Producto actualizado correctamente' });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
}

export const deleteProduct = (req, res) => {
    const { id } = req.params;
    const deleted = productService.deleteProduct(parseInt(id, 10));
    if (deleted) {
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } else {
        res.status(404).json({ message: 'Producto no encontrado ni eliminado' });
    }
};

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};

