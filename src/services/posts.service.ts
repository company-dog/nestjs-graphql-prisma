import { Injectable } from '@nestjs/common';
import { Post } from '../graphql';

@Injectable()
export class PostsService {
  async findAll(props: { authorId: number }): Promise<Post[]> {
    const posts = await Promise.resolve<Post[]>([
      {
        id: 123,
        title: 'test',
        votes: 1333,
      },
    ]);
    return posts;
  }
}
