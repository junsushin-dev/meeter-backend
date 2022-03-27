import { Meeting } from 'src/meetings/entities/meeting.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Timeslot } from './timeslot.entity';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  participantId: number;

  @Column()
  name: string;

  @ManyToOne(() => Meeting, (meeting) => meeting)
  meeting: Meeting;

  @OneToMany(() => Timeslot, (timeslot) => timeslot.participant)
  timeslots: Timeslot[];
}
