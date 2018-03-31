import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
   name: { type: String, required: [true, "Field required!"] , min: [3, "Minimun 3 characters"]}
});

export default mongoose.model("room", roomSchema);