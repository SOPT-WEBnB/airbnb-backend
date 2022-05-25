import express, { Request, Response } from 'express';
import { WishCreateDto } from '../DTO/wishCreateDTO';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import { wishService } from '../services';
import { validationResult } from 'express-validator';
import { roomService } from '../services';

/**
 *  @route POST /wish
 *  @desc Create Wishlist
 *  @access Public
 */

const createWish = async (req: Request, res: Response) => {
  // const error = validationResult(req);
  // if (!error.isEmpty()) {
  //     return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  // }

  const wishCreateDto: WishCreateDto = req.body;

  try {
    const data = await wishService.createWish(wishCreateDto);

    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_WISH_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

/**
 *  @route GET /wish
 *  @desc READ  Wishlist
 *  @access Public
 */

const getWishes = async (req: Request, res: Response) => {
  try {
    const data = await wishService.getWishes();

    if (!data) {
      return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_WISH_SUCCESS, data));
  } catch (error) {
    console.log(error);
    //서버 내부에서 오류 발생
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const postRoomInWish = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }
  const roomId: string = req.body.roomId;
  const wishId: string = req.params.wishId;

  try {
    const data = await roomService.postRoomInWish(roomId, wishId);
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.SUCCESS));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const searchRoomInWish = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }
  const wishId: string = req.params.wishId;

  try {
    const data = await roomService.searchRoomInWish(wishId);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  postRoomInWish,
  searchRoomInWish,
  getWishes,
  createWish,
};
