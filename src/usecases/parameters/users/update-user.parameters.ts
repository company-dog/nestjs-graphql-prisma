import { UserUpdateInput, UserWhereUniqueInput } from '@prisma/client';

export type UpdateUserParameters = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};
