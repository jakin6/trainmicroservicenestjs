import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicromoduleModule } from './micromodule/micromodule.module';
import { MicrocontrollerController } from './microcontroller/microcontroller.controller';
import { MicroserviceService } from './microservice/microservice.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MicromoduleModule,
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AppController, MicrocontrollerController],
  providers: [AppService, MicroserviceService],
})
export class AppModule {}
