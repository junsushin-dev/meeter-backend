import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Meeting } from 'src/meetings/entities/meeting.entity';
import { Repository } from 'typeorm';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant } from './entities/participant.entity';

@Injectable()
export class ParticipantsService {
  constructor(
    @InjectRepository(Meeting)
    private meetingRepository: Repository<Meeting>,
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
  ) {}

  async create(createParticipantDto: CreateParticipantDto, meetingId: number) {
    const participant = this.participantRepository.create(createParticipantDto);
    const meeting = await this.meetingRepository.findOneBy({ meetingId });

    participant.meeting = meeting;
    participant.timeslots = [];
    meeting.participants = [...(meeting.participants ?? []), participant];

    await Promise.all([
      this.participantRepository.save(participant),
      this.meetingRepository.save(meeting),
    ]);
  }

  findAll() {
    return `This action returns all participants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} participant`;
  }

  async update(name: string, updateParticipantDto: UpdateParticipantDto) {
    const participant = await this.participantRepository.findOneBy({ name });
    participant.timeslots = updateParticipantDto.timeslots;

    await this.participantRepository.save(participant);
  }

  remove(id: number) {
    return `This action removes a #${id} participant`;
  }
}
