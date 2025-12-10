import { Family } from "../models/family.model.js";

export const createFamily = async (data) => {
     const family = new Family(data);
     return await family.save();
};