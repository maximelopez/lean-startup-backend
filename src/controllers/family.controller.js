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
  try {
    const families = await familyService.getAllFamilies();
    return res.status(200).json(families);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des familles",
      error: error.message
    });
  }
};

export const getFamilyById = async (req, res) => {
  try {
    const family = await familyService.getFamilyById(req.params.id);
    res.status(200).json(family);
  } catch (error) {
    res.status(404).json({
      message: "Famille non trouvée.",
      error: error.message
    });
  }
};

export const updateFamily = async (req, res) => {
  try {
    const updated = await familyService.updateFamily(req.params.id, req.body);

    return res.status(200).json({
      message: "Famille mise à jour avec succès",
      family: updated
    });

  } catch (error) {

    // ID invalide → CastError
    if (error.name === "CastError") {
      return res.status(400).json({ message: "ID invalide" });
    }

    return res.status(404).json({
      message: "Famille non trouvée",
      error: error.message
    });
  }
};

export const deleteFamily = async (req, res) => {
  try {
    const deleted = await familyService.deleteFamily(req.params.id);

    return res.status(200).json({
      message: "Famille supprimée avec succès",
      deleted
    });

  } catch (error) {

    // ID invalide
    if (error.name === "CastError") {
      return res.status(400).json({ message: "ID invalide" });
    }

    return res.status(404).json({
      message: "Famille non trouvée.",
      error: error.message
    });
  }
};
