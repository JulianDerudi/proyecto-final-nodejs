import { Router } from "express";
import { createAuthentication, registerUser } from "../controllers/auth-controller.js";

const router = Router();

// body params
router.post('/login', createAuthentication);
router.post('/register', registerUser);

export default router;
