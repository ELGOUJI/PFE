import mongoose from "mongoose";

const hourRanges = [
  "10:15 - 11:45",
  "12:00 - 10:00",
  "13:45 - 15:15",
  "15:30 - 17:00",
  "08:30 - 10:00",
];

const schema = new mongoose.schema({
  date: {
    type: Date,
  },
  hourRangeIndex: {
    type: Number,
    min: 1,
    max: hourRanges.length,
  },
  professeur: {
    type: Schema.Types.ObjectId,
    ref: "Professeur",
  },

  salle: {
    type: Schema.Types.ObjectId,
    ref: "Salle",
  },
});

export const Reservation = mongoose.model("Reservation", schema);
