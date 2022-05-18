import debug from "debug";
import { checkSchema } from "express-validator";
import shortid from "shortid";
import mongooseService from "../../common/services/mongoose.service";
import ICreateRegisterDto from "../dto/create.register.dto";

const log: debug.IDebugger = debug("app:in-memory-dao");

class RegisterDao {
  constructor() {
    log("Created new instance of RegisterDao");
  }

  Schema = mongooseService.getMongoose().Schema;

  registerSchema = new this.Schema(
    {
      _id: String,
      firstname: String,
      lastname: String,
      email: String,
      phone: String,
      birthday: String,
      city: String,
    },
    { id: false }
  );

  Register = mongooseService
    .getMongoose()
    .model("Register", this.registerSchema);

  async getRegisters(limit = 25, page = 0) {
    return this.Register.find({})
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async addRegister(userFields: ICreateRegisterDto) {
    const registerId = shortid.generate();
    const user = new this.Register({
      _id: registerId,
      ...userFields,
    });
    await user.save();
    return registerId;
  }

  async getUserByPhone(phone: string) {
    return await this.Register.findOne({ phone }).exec();
  }
}

export default new RegisterDao();
