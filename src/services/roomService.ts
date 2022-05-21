import Room from '../models/room';
const postRoomInWish = async (wishId: string, roomId: string) => {
  try {
    await Room.updateOne(
      { _id: wishId },
      {
        $push: { rooms: { _id: roomId } },
      },
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  postRoomInWish,
};
