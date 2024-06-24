import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './pro.schema';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ProController } from './pro/pro.controller';
import { ProService } from './pro/pro.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController, ProController],
  providers: [AppService, ProService],
})
export class AppModule {}
