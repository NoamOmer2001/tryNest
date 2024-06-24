import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MissionController } from './mission.controller';
import { MissionService } from './mission.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [MissionController],
  providers: [MissionService],
})
export class MissionModule {}
