import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
//@Dependencies(HttpService)
export class AxiosService {
  constructor(private readonly httpService: HttpService) {}
  findAll() {
    return this.httpService.get('http://localhost:3000/axios');
  }
}
