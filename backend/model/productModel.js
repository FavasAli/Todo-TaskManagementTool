import mongoose from "mongoose";

const dataSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    todo: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    completion: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Data=mongoose.model("Data",dataSchema)

export default Data
