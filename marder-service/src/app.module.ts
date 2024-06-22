import { Injectable, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { HttpModule, HttpService } from '@nestjs/axios';
import { timeout } from 'rxjs';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
@Injectable()
export class AppModule {
  constructor(@InjectConnection() private connection: Connection) {}
  //constructor(private readonly httpServive: HttpService) {}
}
