import * as familyService from '../services/family.service.js';

export const createFamily = async (req, res) => {
    try {
        const family = await familyService.createFamily(req.body);
        res.status(201).json(family);
    } catch (error) {
        res.status(400).json({ message: 'Impossible de créer la famille.', error: error.message });
    }
};

export const getAllFamilies = async (req, res) => {

};

export const getFamily = async (req, res) => {

};

export const updateFamily = async (req, res) => {

};

export const deleteFamily = async (req, res) => {

};