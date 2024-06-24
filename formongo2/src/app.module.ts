import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
