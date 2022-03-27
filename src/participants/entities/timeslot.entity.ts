import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Meeting } from '../../meetings/entities/meeting.entity';
import { Participant } from './participant.entity';

@Entity()
export class Timeslot {
  @PrimaryGeneratedColumn()
  timeslotId: number;

  @Column()
  timeslotStart: Date;

  @Column()
  timeslotEnd: Date;

  @OneToMany(() => Meeting, (meeting) => meeting.timeslots)
  meeting: Meeting;

  @OneToMany(() => Participant, (participant) => participant.timeslots)
  participant: Participant;
}
