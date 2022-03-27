import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { MeetingsService } from 'src/meetings/meetings.service';

@Controller('meetings/:meetingUrlKey/participants')
export class ParticipantsController {
  constructor(
    private readonly participantsService: ParticipantsService,
    private readonly meetingsService: MeetingsService,
  ) {}

  @Post()
  create(
    @Param('meetingUrlKey') meetingUrlKey: string,
    @Body() createParticipantDto: CreateParticipantDto,
  ) {
    const meetingId = this.meetingsService.convertUrlKeyToId(meetingUrlKey);

    return this.participantsService.create(createParticipantDto, meetingId);
  }

  @Get()
  findAll() {
    return this.participantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participantsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParticipantDto: UpdateParticipantDto,
  ) {
    return this.participantsService.update(+id, updateParticipantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantsService.remove(+id);
  }
}
