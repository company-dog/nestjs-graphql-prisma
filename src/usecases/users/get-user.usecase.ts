import { Injectable } from '@nestjs/common';
import { GetUserParameters } from '../parameters/users/get-user.parameters';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class GetUserUsecase {
  constructor(private readonly prisma: PrismaService) {}

  execute(params: GetUserParameters) {
    return this.prisma.user.findOne({
      where: params.cursor,
    });
  }
}
