import { Injectable } from '@nestjs/common';
import { Author } from '../graphql';

@Injectable()
export class AuthorsService {
  async findOneById(id: number): Promise<Author> {
    return await Promise.resolve({
      id,
      firstName: 'hanako',
      lastName: 'Yamada',
    });
  }
}
