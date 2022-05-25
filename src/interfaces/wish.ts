import mongoose from 'mongoose';

export interface WishInfo {
  name: string;
  rooms: [mongoose.Types.ObjectId];
}
export interface WishRoomInfo {
  room: mongoose.Types.ObjectId;
}
