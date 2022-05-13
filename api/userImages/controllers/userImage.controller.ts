import express from "express";
import userImageService from "../services/userImage.service";
import debug from "debug";

const log: debug.Debugger = debug("app:userImages-controller");
const cloudinary = require("../../utils/cloudinary");

class ImageController {
  async listAllUserImages(req: express.Request, res: express.Response) {
    const userImages = await userImageService.listAllImages(100, 0);
    res.status(200).send(userImages);
  }

  async listImagesByUserId(req: express.Request, res: express.Response) {
    const { userId } = req.params;
    const userImage = await userImageService.listUserImages(userId);
    res.status(200).send(userImage);
  }

  async getImageByImageId(req: express.Request, res: express.Response) {
    const userImage = await userImageService.getUserImageById(req.body.email);
    res.status(200).send(userImage);
  }

  async createUserImage(
    req: express.Request & { file: any },
    res: express.Response
  ) {
    let result;
    if (req.file && req.file.path) {
      result = await cloudinary.uploader.upload(req.file.path);
      req.body.belongUserId = res.locals.jwt.userId;
      req.body.profile_img = result.public_id;
      req.body.cloudinary_id = result.secure_url;
    }

    const userImageId = await userImageService.create(req.body);
    console.log("userImageId", userImageId);
    res.status(201).send(userImageId);
  }

  async removeUserImage(req: express.Request, res: express.Response) {
    log(await userImageService.deleteById(req.body.id));
    res.status(204).send();
  }
}

export default new ImageController();
