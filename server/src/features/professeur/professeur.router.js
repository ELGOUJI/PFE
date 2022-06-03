import express from "express";
import { catchAsync } from "../../utils/catchAsync";
import { createProfesseur } from "./professeur.controller";
// import { getAllReservations } from "./reservation.controller";

export const router = express.Router();

router.post("/", catchAsync(async (req, res, next) => {
    // validate jwt token
    next(new Error(`you're not logged in`))
}),createProfesseur);
