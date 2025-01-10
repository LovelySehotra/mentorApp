import mongoose, { model, Schema } from "mongoose";

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" }
})
export const Course = model("Course",courseSchema)