import { PartialType } from '@nestjs/mapped-types';
import { Timeslot } from '../entities/timeslot.entity';
import { CreateParticipantDto } from './create-participant.dto';

export class UpdateParticipantDto extends PartialType(CreateParticipantDto) {
  timeslots: Pick<Timeslot, 'timeslotStart' | 'timeslotEnd'>[];
}
