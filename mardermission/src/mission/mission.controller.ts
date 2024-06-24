import { Controller, Param, Get } from '@nestjs/common';
import { MissionService } from './mission.service';
import { User } from './mission.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: MissionService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.userService.getUserById(userId);
  }
}
