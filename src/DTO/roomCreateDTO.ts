import mongoose from 'mongoose';

export interface RoomCreateDto {
  name: string;
  price: number;
  host: string;
  like: boolean;
}
