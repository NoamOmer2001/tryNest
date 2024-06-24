import { Injectable } from '@nestjs/common';
import { MissionRepository } from './mission.repository';
import { User } from './mission.schema';
//import { HttpService } from '@nestjs/axios';
//import { Observable } from 'rxjs';
//import { UpdateUserDto } from './schemas/users/dto/update-user.dto';

@Injectable()
export class MissionService {
  constructor(
    private readonly usersREpository: MissionRepository,
    //httpService: HttpService,
  ) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersREpository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersREpository.find({});
  }

  async createUser(user_id: string, telephone_number: number): Promise<User> {
    return this.usersREpository.create({
      //userId: new Date().getTime().toString(),
      user_id,
      telephone_number,
    });
  }
  /*
  async updatedUser(userId: string, userUpdate: UpdateUserDto): Promise<User> {
    return this.usersREpository.findOneAndUpdate({ userId }, userUpdate);
  }
  */

  //findAllWithAxios(): Observable
}
