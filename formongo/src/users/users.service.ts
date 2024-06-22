import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './schemas/users/dto/update-user.dto';

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
      email,
      age,
      favotieFoods: [],
    });
  }

  async updatedUser(userId: string, userUpdate: UpdateUserDto): Promise<User> {
    return this.usersREpository.findOneAndUpdate({ userId }, userUpdate);
  }
}
