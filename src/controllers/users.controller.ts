import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserUsecase } from '../usecases/create-user.usecase';
import { CreateUserParameters } from '../usecases/parameters/users/create-user.parameters';
import { UpdateUserParameters } from '../usecases/parameters/users/update-user.parameters';
import { DeleteUserParameters } from '../usecases/parameters/users/delete-user.parameters';
import { GetUserParameters } from '../usecases/parameters/users/get-user.parameters';
import { GetUsersParameters } from '../usecases/parameters/users/get-users.parameters';
import { GetUserUsecase } from '../usecases/users/get-user.usecase';
import { GetUsersUsecase } from '../usecases/users/get-users.usecase';
import { UpdateUserUsecase } from '../usecases/users/update-user.usecase';
import { DeleteUserUsecase } from '../usecases/users/delete-user.usecase';

@Controller('users')
export class UsersControlelr {
  constructor(
    private readonly createUserUsecase: CreateUserUsecase,
    private readonly getUserUsecase: GetUserUsecase,
    private readonly getUsersUsecase: GetUsersUsecase,
    private readonly upadteUserUsecase: UpdateUserUsecase,
    private readonly deleteUserUsecase: DeleteUserUsecase,
  ) {}

  @Post('getUsers')
  getUsers(@Body() parmas: GetUsersParameters) {
    return this.getUsersUsecase.execute(parmas);
  }

  @Post('getUser')
  getUser(@Body() params: GetUserParameters) {
    return this.getUserUsecase.execute(params);
  }

  @Post('createUser')
  createUser(@Body() params: CreateUserParameters) {
    return this.createUserUsecase.execute(params);
  }

  @Post('updateUser')
  updateUser(@Body() params: UpdateUserParameters) {
    return this.upadteUserUsecase.execute(params);
  }

  @Post('deleteUser')
  deleteUser(@Body() params: DeleteUserParameters) {
    return this.deleteUserUsecase.execute(params);
  }
}
