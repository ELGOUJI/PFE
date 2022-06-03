import { Professeur } from "./professeur.model";

export const createProfesseur = async ({ name }) => {
  const professeur = await Professeur.create({ name });
  return professeur;
};
