import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bug: { type: mongoose.Schema.Types.ObjectId, ref: "Bug", required: true },
    status: { type: String, enum: ["passed", "failed"], required: true },
    timeSpentSeconds: { type: Number, min: 0, required: true },
    notes: { type: String, default: "" }
  },
  { timestamps: true }
);

attemptSchema.index({ user: 1, bug: 1, createdAt: -1 });

export const Attempt = mongoose.model("Attempt", attemptSchema);
