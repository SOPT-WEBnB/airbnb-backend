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

export default {
  postRoomInWish,
  searchRoomInWish,
};
