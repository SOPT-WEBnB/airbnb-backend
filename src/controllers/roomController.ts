import { RoomCreateDto } from '../DTO/roomCreateDTO';
import roomService from '../services/roomService';
import express, { Request, Response } from 'express';
import { WishCreateDto } from '../DTO/wishCreateDTO';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import { wishService } from '../services';
import { validationResult } from 'express-validator';

const createRoom = async (req: Request, res: Response) => {
  const roomCreateDto: RoomCreateDto = req.body;
  res.setHeader('Access-Control-Allow-Headers', '*');
  try {
    const data = await roomService.createRoom(roomCreateDto);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createRoom,
};
