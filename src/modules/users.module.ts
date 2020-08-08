import { Module, HttpModule } from '@nestjs/common';
import { UsersControlelr } from '../controllers/users.controller';
import { CreateUserUsecase } from '../usecases/create-user.usecase';
import { PrismaModule } from './prisma.module';
import { GetUsersUsecase } from '../usecases/users/get-users.usecase';
import { GetUserUsecase } from '../usecases/users/get-user.usecase';
import { UpdateUserUsecase } from '../usecases/users/update-user.usecase';
import { DeleteUserUsecase } from '../usecases/users/delete-user.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [UsersControlelr],
  providers: [
    GetUsersUsecase,
    CreateUserUsecase,
    GetUserUsecase,
    UpdateUserUsecase,
    DeleteUserUsecase,
  ],
})
export class UsersModule {}
