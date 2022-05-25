import mongoose from 'mongoose';
import { RoomCreateDto } from '../DTO/roomCreateDTO';
import Room from '../models/room';
import Wish from '../models/wish';

const postRoomInWish = async (roomId: string, wishId: string) => {
  try {
    const data = await Wish.updateOne({ _id: wishId }, { $push: { rooms: roomId } });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const searchRoomInWish = async (wishId: string) => {
  try {
    const data = await Wish.findById(wishId).populate('rooms');

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createRoom = async (roomCreateDto: RoomCreateDto) => {
  try {
    const room = new Room(roomCreateDto);

    await room.save();

    return room;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  postRoomInWish,
  searchRoomInWish,
  createRoom,
};
