import shortid from "shortid";
import debug from "debug";

const log: debug.IDebugger = debug("app:in-memory-dao");

import { ICreateUserImageDto } from "../dto/create.userImage.dto";

import mongooseService from "../../common/services/mongoose.service";

class ImagesDao {
  images: Array<ICreateUserImageDto> = [];

  constructor() {
    log("Created new instance of ImagesDao");
  }

  Schema = mongooseService.getMongoose().Schema;
  ImageSchema = new this.Schema(
    {
      _id: String,
      belongUserId: String,
      imageStatus: { type: Boolean, default: true },
      profile_img: String,
      cloudinary_id: String,
    },
    { id: false }
  );

  Image = mongooseService.getMongoose().model("Images", this.ImageSchema);

  async getAllUserImages(limit = 25, page = 0) {
    return this.Image.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async getUserImagesById(userId: string) {
    return this.Image.findOne({ _id: userId }).exec();
  }

  async getUserImageByImageId(imageId: string) {
    return this.Image.findOne({ _id: imageId }).exec();
  }

  async addUserImage(imageFields: ICreateUserImageDto) {
    const imageId = shortid.generate();
    console.log("imageFields", imageFields);
    const Image = new this.Image({
      _id: imageId,
      ...imageFields,
    });
    await Image.save();
    return imageId;
  }

  async removeUserImageById(ImageId: string) {
    return await this.Image.deleteOne({ _id: ImageId }).exec();
  }
}

export default new ImagesDao();
