import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../usersservice/usersservice.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
