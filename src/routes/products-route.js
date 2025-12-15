import { Router } from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/products-controller.js";
import { verifyToken } from "../middlewares/auth-middleware.js";

const router = Router();

// query params: /products?price=150
router.get('/', verifyToken, getProducts);

// path params: /products/1
router.get('/:id', verifyToken, getProductById);

// body params
router.post('/create', verifyToken, createProduct);

// body params + path params
router.put('/:id', verifyToken, updateProduct);

// path params
router.delete('/:id', verifyToken, deleteProduct);

export default router;
