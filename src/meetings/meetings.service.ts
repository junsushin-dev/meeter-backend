import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { Meeting } from './entities/meeting.entity';

@Injectable()
export class MeetingsService {
  private base62Chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  constructor(
    @InjectRepository(Meeting)
    private meetingRepository: Repository<Meeting>,
  ) {}

  async create(createMeetingDto: CreateMeetingDto) {
    const meeting = this.meetingRepository.create(createMeetingDto);
    const savedMeeting = await this.meetingRepository.save({
      ...meeting,
      timeRangeStart: new Date(createMeetingDto.timeRangeStart),
      timeRangeEnd: new Date(createMeetingDto.timeRangeEnd),
    });
    const meetingUrlKey = this.convertIdToUrlKey(savedMeeting.meetingId);
    this.meetingRepository.update(savedMeeting.meetingId, { meetingUrlKey });
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

  convertUrlKeyToId(urlKey: string) {
    const chars = [...urlKey];

    let id = 0;
    let multiplier = 1;

    while (chars.length > 0) {
      const lastChar = chars.shift();
      id += this.base62Chars.indexOf(lastChar) * multiplier;
      multiplier *= 62;
    }

    return id;
  }
}
