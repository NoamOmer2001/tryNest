import { Injectable } from '@nestjs/common';
import { UsersRepository } from './pro.repository';
import { User } from './pro.schema';
//import { UpdateUserDto } from './schemas/users/dto/update-user.dto';

@Injectable()
export class ProService {
  constructor(private readonly usersREpository: UsersRepository) {}
  /*
  async getUserById(userId: string): Promise<User> {
    return this.usersREpository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersREpository.find({});
  }
*/

  async createUser(user_id: string, telephone_number: number): Promise<User> {
    return this.usersREpository.create({
      user_id: new Date().getTime().toString(),
      telephone_number,
    });
  }
  /*
  async updatedUser(userId: string, userUpdate: UpdateUserDto): Promise<User> {
    return this.usersREpository.findOneAndUpdate({ userId }, userUpdate);
  }
*/
}
