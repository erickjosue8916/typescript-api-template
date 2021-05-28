import { Router } from 'express'
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IUserController } from "./index";
import { ApplicationRoute } from "../../../repositories/interfaces"
import { TYPES }  from "./types";


@injectable()
export class UserRouter implements ApplicationRoute {
  private userController: IUserController

  public constructor(
    @inject (TYPES.UserController) userController: IUserController
  ) {
    this.userController = userController
  }

  public getRouter(): Router {
    const router = Router()
    router.route('/')
      .get(this.userController.listUsers)
      .post(this.userController.createUser)

    router.route('/:userId')
      .get(this.userController.getUserById)
      .put(this.userController.updateUser)
    return router
  }
}
