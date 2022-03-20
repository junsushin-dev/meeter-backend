import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingsModule } from './meetings/meetings.module';

@Module({
  imports: [ConfigModule.forRoot(), MeetingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
