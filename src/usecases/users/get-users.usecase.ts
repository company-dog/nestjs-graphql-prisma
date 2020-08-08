import { Injectable } from '@nestjs/common';
import { GetUsersParameters } from '../parameters/users/get-users.parameters';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class GetUsersUsecase {
  constructor(private readonly prisma: PrismaService) {}
  async execute(params: GetUsersParameters): Promise<any> {
    const { cursor, skip, take, orderBy, where } = params;
    const users = await this.prisma.user.findMany({
      skip,
      take,
      orderBy,
      where,
      cursor,
    });

    return {
      users,
    };
  }
}
