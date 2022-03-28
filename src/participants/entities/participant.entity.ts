import { Meeting } from 'src/meetings/entities/meeting.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

export interface Timeslot {
  timeslotStart: Date;
  timeslotEnd: Date;
}

@Entity()
@Unique(['meeting', 'name'])
export class Participant {
  @PrimaryGeneratedColumn()
  participantId: number;

  @Column()
  name: string;

  @ManyToOne(() => Meeting, (meeting) => meeting.participants)
  meeting: Meeting;

  @Column({ type: 'json' })
  timeslots: Timeslot[];
}
