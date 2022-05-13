import { ICreateUserImageDto } from "../dto/create.userImage.dto";
import UserImageDao from "../daos/userImages.dao";

class UserImagesService {
  async listAllImages(limit: number, page: number) {
    return UserImageDao.getAllUserImages(limit, page);
  }

  async listUserImages(imageId: string) {
    return UserImageDao.getUserImagesById(imageId);
  }

  async getUserImageById(imageId: string) {
    return UserImageDao.getUserImageByImageId(imageId);
  }

  async create(resource: ICreateUserImageDto) {
    return UserImageDao.addUserImage(resource);
  }

  async deleteById(imageId: string) {
    return UserImageDao.removeUserImageById(imageId);
  }
}

export default new UserImagesService();
