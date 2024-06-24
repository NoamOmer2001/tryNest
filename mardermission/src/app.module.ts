import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionController } from './mission/mission.controller';
import { MissionService } from './mission/mission.service';
import { MissionModule } from './mission/mission.module';

@Module({
  imports: [MissionModule],
  controllers: [AppController, MissionController],
  providers: [AppService, MissionService],
})
export class AppModule {}
