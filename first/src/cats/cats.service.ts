import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCats(): string[] {
    return ['siamese', 'persian', 'maine coon', 'sphynx'];
  }
}
