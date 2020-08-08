import { PrismaService } from '../../prisma.service';
import { DeleteUserParameters } from '../parameters/users/delete-user.parameters';

export class DeleteUserUsecase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(params: DeleteUserParameters) {
    return this.prisma.user.delete({
      where: params,
    });
  }
}
