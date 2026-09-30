import mongoose from "mongoose";

const reproductionSchema = new mongoose.Schema(
  {
    steps: {
      type: [String],
      required: true,
      validate: {
        validator: (steps) => steps.length > 0,
        message: "At least one reproduction step is required."
      }
    },
    expected: { type: String, required: true },
    actual: { type: String, required: true }
  },
  { _id: false }
);

const bugSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 5 },
    description: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true
    },
    category: {
      type: String,
      enum: ["JavaScript", "React", "MongoDB", "PostgreSQL"],
      required: true
    },
    tags: { type: [String], default: [] },
    reproduction: { type: reproductionSchema, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

bugSchema.index({ category: 1, difficulty: 1 });
bugSchema.index({ tags: 1 });

export const Bug = mongoose.model("Bug", bugSchema);
