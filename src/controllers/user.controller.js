import * as userService from '../services/user.service.js';

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.loginUser(email, password);
        res.json(user);
    } catch (error) {
        if (error.message.includes('Utilisateur non trouvé') || error.message.includes('Mot de passe incorrect')) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Impossible de créer l’utilisateur', error: error.message });
    }
};