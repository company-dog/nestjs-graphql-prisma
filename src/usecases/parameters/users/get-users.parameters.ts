import {
  UserWhereInput,
  UserWhereUniqueInput,
  UserOrderByInput,
} from '@prisma/client';

export type GetUsersParameters = {
  skip?: number;
  take?: number;
  cursor?: UserWhereUniqueInput;
  where?: UserWhereInput;
  orderBy?: UserOrderByInput;
};
