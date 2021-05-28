import { Request, Response, NextFunction } from 'express'

export interface IUserController {
  listUsers(_req: Request, res: Response, _next: NextFunction): Promise<Response>
  getUserById(_req: Request, res: Response, _next: NextFunction): Promise<Response> 
  getUser(_req: Request, res: Response, _next: NextFunction): Promise<Response> 
  createUser(_req: Request, res: Response, _next: NextFunction): Promise<Response> 
  updateUser(_req: Request, res: Response, _next: NextFunction): Promise<Response>
}
