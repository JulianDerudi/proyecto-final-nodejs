// Datos de ejemplo
const products = [
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 3, name: 'Producto 3', price: 300 },
];

export const getProducts = () => {
    return products;
}   

export const getProductById = (id) => {
    return products.find(p => p.id === id);
}   

export const getProductsByPrice = (price) => {
    return products.filter(p => p.price <= price);
}   

export const addProduct = (product) => {
    const maxId = products.length ? Math.max(...products.map(p => p.id)) : 0;
    const newProduct = { id: maxId + 1, ...product };
    products.push(newProduct);
    return newProduct;
}   

export const updateProduct = (id, updatedProduct) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { id, ...updatedProduct };
        return true;
    }   
    return false;
}  

export const deleteProduct = (id) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        return true;
    }
    return false;
}

export default {
    getProducts,
    getProductById,
    getProductsByPrice,
    addProduct,
    updateProduct,
    deleteProduct
};