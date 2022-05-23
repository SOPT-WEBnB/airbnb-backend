import mongoose from 'mongoose';
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

export default {
  postRoomInWish,
};
