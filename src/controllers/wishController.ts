import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import { roomService } from '../services';

const postRoomInWish = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }
  const roomId: string = req.body.roomId;
  const wishId: string = req.params.wishId;

  try {
    const data = await roomService.postRoomInWish(roomId, wishId);
    console.log(data);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  postRoomInWish,
};
