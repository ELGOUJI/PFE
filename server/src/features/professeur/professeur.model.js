import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export const Professeur = mongoose.model("Professeur", schema);
