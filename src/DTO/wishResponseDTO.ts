import mongoose from 'mongoose';

export interface WishResponseDto {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  rooms?: [mongoose.Types.ObjectId];
}
