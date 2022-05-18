import express from "express";
import jwtMiddleware from "../auth/middleware/jwt.middleware";
import { CommonRoutesConfig } from "../common/common.routes.config";
import { PermissionFlag } from "../common/middleware/common.permissionflag.enum";
import permissionMiddleware from "../common/middleware/common.permission.middleware";
import { body } from "express-validator";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";
import RegisterMiddleware from "./middlewares/register.middleware";
import RegisterController from "./controllers/register.controller";

export class RegisterRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "RegisterRoutes");
  }

  configureRoutes(): express.Application {
    this.app
      .route("/register")
      .get(
        jwtMiddleware.validJWTNeeded,
        permissionMiddleware.permissionFlagRequired(
          PermissionFlag.ADMIN_PERMISSION
        ),
        RegisterController.listRegisters
      )
      .post(
        body("firstname")
          .isLength({ min: 2 })
          .withMessage("Must include first name (3+ characters)"),
        body("lastname")
          .isLength({ min: 2 })
          .withMessage("Must include first name (3+ characters)"),
        body("phone")
          .isMobilePhone("tr-TR")
          .withMessage("Enter valid tr phone number"),
        body("email").isEmail().withMessage("Enter valid email"),
        body("birthday")
          .isLength({ min: 10 })
          .withMessage("Enter valid birthday"),
        BodyValidationMiddleware.verifyBodyFieldsErrors,
        RegisterMiddleware.validateSamePhoneDoesntExist,
        RegisterController.createRegister
      );

    return this.app;
  }
}
