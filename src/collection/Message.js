import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    author: { type: String, required: [true, "Field author required!"]},
    type: { type: String, enum: ["msg", "audio"], default: "msg"},
    content: { type: String, required:[true, "Field content required!"]},
    room: { type: mongoose.SchemaType.ObjectId, required: [true, "Field room required!"] }
});

export default mongoose.model("message", messageSchema);