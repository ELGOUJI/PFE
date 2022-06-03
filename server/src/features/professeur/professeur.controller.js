import { catchAsync } from "../../utils/catchAsync";
import * as professeurService from "./professeur.service";

export const createProfesseur = catchAsync(async (req, res, next) => {
  const { name } = req.body || {};
  if (!name)
    throw new Error('name is requried to create a "professeur" document!');

  const professeur = await professeurService.createProfesseur({ name });

next()

  res.json({
    status: "success",
    data: {
      professeur,
    },
  });
});
