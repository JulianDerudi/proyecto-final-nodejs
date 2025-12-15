import { createAuthentication, registerUser } from '../models/Auth.js';

// Servicio para crear una autenticación
export const createAuthenticationService = async (data) => {
    const { email, password } = data;
    return await createAuthentication(email, password);
};

// Servicio para registrar un usuario
export const registerUserService = async (data) => {
    const { email, password } = data;
    return await registerUser(email, password);
};

export default {
    createAuthenticationService,
    registerUserService
};