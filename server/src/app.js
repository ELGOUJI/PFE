import express from "express";
import morgan from "morgan";

// import routes
import { router as professeurRouter } from "./features/professeur";
import { router as reservationRouter } from "./features/reservation";

const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.use("/api/reservations", reservationRouter);
app.use("/api/professeurs", professeurRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export { app };
