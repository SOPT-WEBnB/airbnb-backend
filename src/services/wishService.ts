import { PostBaseResponseDto } from '../DTO/postBaseResponseDTO';
import { WishCreateDto } from '../DTO/wishCreateDTO';
import { WishResponseDto } from '../DTO/wishResponseDTO';
import Wish from '../models/wish';

const createWish = async (wishCreateDto: WishCreateDto): Promise<PostBaseResponseDto> => {
  try {
    const wish = new Wish({
      name: wishCreateDto.name,
    });

    await wish.save();

    const data = {
      _id: wish.id,
    };
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getWishes = async (): Promise<WishResponseDto[] | null> => {
  try {
    const wish = await Wish.find();

    if (!wish) {
      return null;
    }
    console.log(wish);
    return wish;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createWish,
  getWishes,
};
