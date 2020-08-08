import { PrismaService } from '../../prisma.service';
import { UpdateUserParameters } from '../parameters/users/update-user.parameters';

export class UpdateUserUsecase {
  constructor(private readonly prisma: PrismaService) {}

  execute(params: UpdateUserParameters) {
    return this.prisma.user.update({
      data: params.data,
      where: params.where,
    });
  }
}
