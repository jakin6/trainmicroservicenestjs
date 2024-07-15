import { Module } from '@nestjs/common';
import { UsersController } from '../userscontroller/usersController';
import { UsersService } from '../usersservice/usersservice.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
