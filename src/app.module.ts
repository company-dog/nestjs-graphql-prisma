import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users.module';
import { PrismaModule } from './modules/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthorsModule } from './modules/authors.module';
import { PostsModule } from './modules/posts.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    PrismaModule,
    UsersModule,
    AuthorsModule,
    PostsModule,
  ],
})
export class AppModule {}
