import { Module } from '@nestjs/common';
import { AuthorsResolvers } from '../resolvers/authors.resolver';
import { AuthorsService } from '../services/authrors.service';
import { PostsService } from '../services/posts.service';
import { PostsModule } from './posts.module';

@Module({
  imports: [PostsModule],
  providers: [AuthorsService, AuthorsResolvers, PostsService],
})
export class AuthorsModule {}
