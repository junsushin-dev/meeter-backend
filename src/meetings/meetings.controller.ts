import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';

@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingsService: MeetingsService) {}

  @Post()
  create(@Body() createMeetingDto: CreateMeetingDto) {
    return this.meetingsService.create(createMeetingDto);
  }

  @Get()
  findAll() {
    return this.meetingsService.findAll();
  }

  @Get(':meetingUrlKey')
  findOne(@Param('meetingUrlKey') meetingUrlKey: string) {
    const meetingId = this.meetingsService.convertUrlKeyToId(meetingUrlKey);

    return this.meetingsService.findOne(meetingId);
  }

  @Patch(':meetingUrlKey')
  update(
    @Param('meetingUrlKey') meetingUrlKey: string,
    @Body() updateMeetingDto: UpdateMeetingDto,
  ) {
    const meetingId = this.meetingsService.convertUrlKeyToId(meetingUrlKey);

    return this.meetingsService.update(meetingId, updateMeetingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetingsService.remove(parseInt(id));
  }
}
