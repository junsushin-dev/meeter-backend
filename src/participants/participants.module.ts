import { Module } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { ParticipantsController } from './participants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from './entities/participant.entity';
import { MeetingsModule } from 'src/meetings/meetings.module';
import { Meeting } from 'src/meetings/entities/meeting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meeting, Participant]), MeetingsModule],
  controllers: [ParticipantsController],
  providers: [ParticipantsService],
})
export class ParticipantsModule {}
