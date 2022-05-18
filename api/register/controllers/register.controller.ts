import express from "express";
import RegisterService from "../services/register.service";

class RegisterController {
  async listRegisters(req: express.Request, res: express.Response) {
    const registers = await RegisterService.list(100, 0);
    res.status(200).send(registers);
  }

  async createRegister(req: express.Request, res: express.Response) {
    const registerId = await RegisterService.create(req.body);
    res.status(201).send(registerId);
  }
}

export default new RegisterController();
