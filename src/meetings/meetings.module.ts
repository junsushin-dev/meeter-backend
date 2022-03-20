import { Module } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { MeetingsController } from './meetings.controller';
import { meetingProviders } from './meetings.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MeetingsController],
  providers: [...meetingProviders, MeetingsService],
})
export class MeetingsModule {}
