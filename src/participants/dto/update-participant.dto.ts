import { PartialType } from '@nestjs/mapped-types';
import { Timeslot } from '../entities/participant.entity';
import { CreateParticipantDto } from './create-participant.dto';

export class UpdateParticipantDto extends PartialType(CreateParticipantDto) {
  timeslots: Timeslot[];
}
