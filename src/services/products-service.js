import e from 'express';
import model from '../models/Product.js';

// Servicio para obtener todos los productos
export const getAllProductsService = async () => {
    return await model.getAllProducts();
};

// Servicio para obtener un producto por su ID
export const getProductByIdService = async (id) => {
    return await model.getProductById(id);
};

// Servicio para crear un nuevo producto
export const createProductService = async (data) => {
    return await model.createProduct(data);
};

// Servicio para eliminar un producto por su ID 
export const deleteProductService = async (id) => {
    return await model.deleteProduct(id);
};

export default {
    getAllProductsService,
    getProductByIdService,
    createProductService,
    deleteProductService
};



