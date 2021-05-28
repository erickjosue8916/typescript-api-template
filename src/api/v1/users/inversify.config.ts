import { Container } from 'inversify'
import { TYPES } from './types'
import { IUserController, UserController, UserRouter } from './index'
import { ApplicationRoute } from "../../../repositories/interfaces";

const container = new Container()

container.bind<IUserController>(TYPES.UserController).to(UserController)
container.bind<ApplicationRoute>(TYPES.UserRouter).to(UserRouter)

export { container }
