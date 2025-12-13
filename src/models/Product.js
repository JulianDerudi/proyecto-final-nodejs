import { db } from './firebase.js';
import { collection, doc, getDocs, addDoc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');


// Obtiene todos los productos - GET
export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection);                // una captura de la base de datos
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));  // mapeo los documentos para devolver un array de productos con sus IDs
    } catch (error) {
        console.error('Error getting products from Firestore:', error);
        return [];
    }
};


// Obtiene un producto por su ID - GET /:id
export const getProductById = async (id) => {
    try {
        const productRef = doc(productsCollection, id);
        const productSnap = await getDoc(productRef);          // obtengo el documento por su referencia
        return productSnap.exists() ? { id: productSnap.id, ...productSnap.data() } : null; // si existe, devuelvo el producto con su ID
    } catch (error) {
        console.error('Error getting product by ID from Firestore:', error);
        return null;
    }
};

// Crea un nuevo producto - POST
export const createProduct = async (data) => {
    try {
        const newProductRef = await addDoc(productsCollection, data); // agrega un nuevo documento a la colección
        return { id: newProductRef.id, ...data };                     // devuelve el nuevo producto con su ID
    } catch (error) {
        console.error('Error creating product in Firestore:', error);
        return null;
    }
};


// Elimina un producto por su ID - DELETE
export const deleteProduct = async (id) => {
    try {
        const productRef = doc(productsCollection, id);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
            await deleteDoc(productRef);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error deleting product from Firestore:', error);
        return false;
    }
};


// Actualiza un producto por su ID - PUT
export const updateProduct = async (id, data) => {
    try {
        const productRef = doc(productsCollection, id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
            await updateDoc(productRef, data);
            return { id, ...data };
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error updating product in Firestore:', error);
        return false;
    }
};

// Exporto las funciones para usarlas en el servicio
export default {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
};