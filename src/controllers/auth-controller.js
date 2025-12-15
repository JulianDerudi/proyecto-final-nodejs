import authService from '../services/auth-service.js';

// Controlador para crear una autenticación - POST /auth/login
export const createAuthentication = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }
    const authResult = await authService.createAuthenticationService({ email, password });
    if (authResult) {
        res.status(200).json(authResult);
    } else {
        res.status(401).json({ message: 'Autenticación fallida' });
    }
};

// Controlador para registrar un usuario - POST /auth/register
export const registerUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }
    try {
        const user = await authService.registerUserService({ email, password });
        res.status(201).json({ message: 'Usuario registrado exitosamente', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    createAuthentication,
    registerUser
};
