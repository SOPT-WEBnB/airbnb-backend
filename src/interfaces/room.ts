import mongoose from 'mongoose';

export interface RoomInfo {
  name: string;
  price: number;
  host: string;
  like: boolean;
}
