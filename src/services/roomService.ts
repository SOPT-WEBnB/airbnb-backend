import Room from '../models/room';
const postRoomInWish = async (wishId: string, roomId: string) => {
  try {
    const data = await Room.updateOne(
      { _id: wishId },
      {
        $push: { rooms: { _id: roomId } },
      },
      { new: true },
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  postRoomInWish,
};
