const { Schema, model } = require("mongoose");
const buildingSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pin: { type: String, required: true, min: 6, max: 6 },
  },
  { timestamps: true, versionKey: false }
);
