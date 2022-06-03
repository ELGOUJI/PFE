import express from "express";
import { getAllReservations } from "./reservation.controller";

export const router = express.Router();

router.get("/", getAllReservations);
