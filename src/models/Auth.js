import { auth } from './firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import jwt from 'jsonwebtoken';

// Función para registrar un usuario
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { uid: userCredential.user.uid, email: userCredential.user.email };
    } catch (error) {
        console.error('Error registering user:', error);
        throw new Error('Error al registrar el usuario');
    }
};

// Función para autenticar un usuario (login)
export const createAuthentication = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Generar JWT
        const token = jwt.sign(
            { uid: user.uid, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { token, user: { uid: user.uid, email: user.email } };
    } catch (error) {
        console.error('Error authenticating user:', error);
        return null;
    }
};