import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import UserImageController from "./controllers/userImage.controller";

import jwtMiddleware from "../auth/middleware/jwt.middleware";
import permissionMiddleware from "../common/middleware/common.permission.middleware";

const upload = require("../utils/multer");

export class UserImageRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UserImageRoutes");
  }

  configureRoutes(): express.Application {
    this.app.route("/userImages").get(UserImageController.listAllUserImages);

    this.app
      .route("/userImages/:userId")
      .get(UserImageController.listImagesByUserId);

    this.app.post(`/userImages`, [
      jwtMiddleware.validJWTNeeded,
      upload.single("userImage"),
      UserImageController.createUserImage,
    ]);

    this.app
      .route(`/userImages/:userImageId`)
      .get(UserImageController.getImageByImageId)
      .all(
        jwtMiddleware.validJWTNeeded,
        permissionMiddleware.onlySameUserOrAdminCanDoThisAction
      )
      .delete(UserImageController.removeUserImage);

    return this.app;
  }
}
