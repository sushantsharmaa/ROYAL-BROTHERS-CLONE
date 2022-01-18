const { Schema, model } = require("mongoose");

const locationSchema = new Schema(
  {
    location: { type: String, required: true, unique: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("location", locationSchema);
