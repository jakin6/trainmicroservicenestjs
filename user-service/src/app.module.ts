import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './userscontroller/usersController';
import { UsersService } from './usersservice/usersservice.service';
import { UsersModule } from './usersmodule/usersModule.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
