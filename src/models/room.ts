import mongoose from 'mongoose';
import { RoomInfo } from '../interfaces/room';

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  like: {
    type: Boolean,
  },
});

export default mongoose.model<RoomInfo & mongoose.Document>('Room', RoomSchema);
