import { Family } from "../models/family.model.js";

  
export const createFamily = async (data) => {
     const family = new Family(data);
     return await family.save();
};


export const getAllFamilies = async () => {
     return await Family.find();
}

export const getFamilyById = async (id) => {
     const family = await Family.findById(id);
     return family;
};

export const updateFamily = async (id, updateData) => {
     const updated = await Family.findByIdAndUpdate(
     id,
     updateData,
     { new: true, runValidators: true }
);

if (!updated) {
     throw new Error("Famille non trouvée");
}
return updated;
};


export const deleteFamily = async (id) => {
     return await Family.findByIdAndDelete(id);
};