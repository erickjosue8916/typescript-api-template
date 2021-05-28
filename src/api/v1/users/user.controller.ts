import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Request, Response, NextFunction } from 'express'

import { IUserController } from "./user.controller.interface";


@injectable()
export class UserController implements IUserController{

  public async listUsers(_req: Request, res: Response, _next: NextFunction): Promise<Response> {
    return res.json({ message: `[GET] USERS` })
  }

  public async getUserById(_req: Request, res: Response, _next: NextFunction): Promise<Response> {
    return res.json({ message: `[GET] USER by id` })
  }

  public async getUser(_req: Request, res: Response, _next: NextFunction): Promise<Response> {
    return res.json({ message: `[GET] USER` })
  }

  public async createUser(_req: Request, res: Response, _next: NextFunction): Promise<Response> {
    return res.json({ message: `[POST] CREATE USER` })
  }

  public async updateUser(_req: Request, res: Response, _next: NextFunction): Promise<Response> {
    return res.json({ message: `[PUT] UPDATE USER` })
  }
}
