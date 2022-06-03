import { catchAsync } from "../../utils/catchAsync";

export const getAllReservations = catchAsync(async (req, res, next) => {
  const reservations = [1, 2, 3, 4];



  res.status(200).json(reservations);
});
