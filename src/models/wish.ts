import mongoose from 'mongoose';
import { WishInfo } from '../interfaces/wish';

const WishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rooms: {
    type: [mongoose.Types.ObjectId],
    ref: 'Room',
  },
});

export default mongoose.model<WishInfo & mongoose.Document>('Wish', WishSchema);
