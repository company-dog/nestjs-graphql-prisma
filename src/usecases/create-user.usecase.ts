import { Injectable } from '@nestjs/common';
import { CreateUserParameters } from './parameters/users/create-user.parameters';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CreateUserUsecase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(parmas: CreateUserParameters) {
    return this.prisma.user.create({
      data: parmas,
    });
  }
}
