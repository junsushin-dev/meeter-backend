import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { Meeting } from './entities/meeting.entity';

@Injectable()
export class MeetingsService {
  private base62Chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  constructor(
    @Inject('MEETING_REPOSITORY')
    private meetingRepository: Repository<Meeting>,
  ) {}

  create(createMeetingDto: CreateMeetingDto) {
    return 'This action adds a new meeting';
  }

  findAll() {
    return `This action returns all meetings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meeting`;
  }

  update(id: number, updateMeetingDto: UpdateMeetingDto) {
    return `This action updates a #${id} meeting`;
  }

  remove(id: number) {
    return `This action removes a #${id} meeting`;
  }

  convertIdToUrlKey(id: number) {
    let encoded = '';

    while (id > 0) {
      const remainder = id % 62;
      const quotient = Math.floor(id / 62);
      encoded += this.base62Chars[remainder];
      id = quotient;
    }

    return encoded;
  }
}
