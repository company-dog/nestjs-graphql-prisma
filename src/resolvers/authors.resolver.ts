import { Resolver, Args, Query, Parent, ResolveField } from '@nestjs/graphql';
import { AuthorsService } from '../services/authrors.service';
import { PostsService } from '../services/posts.service';
import { Author, Post } from '../graphql';

@Resolver('Author')
export class AuthorsResolvers {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,
  ) {}

  @Query()
  async author(@Args('id') id: number): Promise<Author> {
    return this.authorsService.findOneById(id);
  }

  @ResolveField('posts')
  async getPosts(@Parent() author: Author): Promise<Post[]> {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
