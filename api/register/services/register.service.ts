import RegisterDao from "../daos/register.dao";
import ICreateRegisterDto from "../dto/create.register.dto";

class RegisterService {
  async list(limit: number, page: number) {
    return RegisterDao.getRegisters(limit, page);
  }

  async create(resource: ICreateRegisterDto) {
    return RegisterDao.addRegister(resource);
  }

  async getRegisterByPhone(phone: string) {
    return RegisterDao.getUserByPhone(phone);
  }
}

export default new RegisterService();
