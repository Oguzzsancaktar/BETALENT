import express from "express";
import RegisterService from "../services/register.service";

class RegisterMiddleware {
  async validateSamePhoneDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const register = await RegisterService.getRegisterByPhone(req.body.phone);
    if (register) {
      res.status(400).send({ errors: ["Phone already exists"] });
    } else {
      next();
    }
  }
}

export default new RegisterMiddleware();
