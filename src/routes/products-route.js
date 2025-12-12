import { Router } from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/products-controller.js";

const router = Router();

// query params: /products?price=150
router.get('/' , getProducts);

// path params: /products/1
router.get('/:id', getProductById);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
