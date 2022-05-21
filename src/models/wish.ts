import mongoose from "mongoose";
import { WishInfo } from "../interfaces/wish";

const WishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rooms: [{
        room: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "room"
        }
    }]
});

export default mongoose.model<WishInfo & mongoose.Document>("Wish", WishSchema);