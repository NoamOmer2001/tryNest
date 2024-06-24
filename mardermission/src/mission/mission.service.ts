import { Injectable } from '@nestjs/common';
import { MissionRepository } from './mission.repository';
import { User } from './mission.schema';
//import { UpdateUserDto } from './schemas/users/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersREpository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersREpository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersREpository.find({});
  }

  async createUser(email: string, age: number): Promise<User> {
    return this.usersREpository.create({
      userId: new Date().getTime().toString(),
      user_id: String,
      telephone_number: Number,
    });
  }

  async updatedUser(userId: string, userUpdate: UpdateUserDto): Promise<User> {
    return this.usersREpository.findOneAndUpdate({ userId }, userUpdate);
  }
}
