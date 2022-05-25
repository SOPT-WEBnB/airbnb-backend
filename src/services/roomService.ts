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
    // var arr: Array<object | null> = [];

    // data.rooms.map(async (room: any) => {
    //   const data2 = await Room.findById(room.room);
    //   arr.push(data2);
    // });
    // const result = {
    //   _id: data._id,
    //   name: data.name,
    //   rooms: arr,
    // };
    // console.log(arr);
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
