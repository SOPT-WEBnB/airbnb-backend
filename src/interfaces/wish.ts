import mongoose from 'mongoose';

export interface WishInfo {
  name: string;
  rooms: WishRoomInfo[];
}
export interface WishRoomInfo {
  room: mongoose.Types.ObjectId;
}
