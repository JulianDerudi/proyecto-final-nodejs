import productService from '../services/products-service.js';

// Controlador para obtener todos los productos - GET /products
export const getProducts = async (req, res) => {
    const products = await productService.getAllProductsService();
    res.json(products);
};

// Controlador para obtener un producto por su ID - GET /products/:id
export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await productService.getProductByIdService(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
};

// Controlador para crear un nuevo producto - POST /products
export const createProduct = async (req, res) => {
    const data = req.body;
    const newProduct = await productService.createProductService(data);
    if (newProduct) {
        res.status(201).json(newProduct);
    } else {
        res.status(500).json({ message: 'Error al crear el producto' });
    }
};

// Controlador para actualizar un producto por su ID - PUT /products/:id
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedProduct = await productService.updateProductService(id, data);
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Producto no encontrado o error al actualizar' });
    }
};

// Controlador para eliminar un producto por su ID - DELETE /products/:id
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const success = await productService.deleteProductService(id);
    if (success) {
        res.json({ message: 'Producto eliminado correctamente' });
    } else {
        res.status(404).json({ message: 'Producto no encontrado o error al eliminar' });
    }   
};

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};

