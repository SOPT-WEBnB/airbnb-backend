import express, { Request, Response } from "express";
import { WishCreateDto } from "../DTO/wishCreateDTO";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util"
import { wishService } from "../services";


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
        //서버 내부에서 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}
