import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Participant } from './participant.entity';

@Entity()
export class Timeslot {
  @PrimaryGeneratedColumn()
  timeslotId: number;

  @Column()
  timeslotStart: Date;

  @Column()
  timeslotEnd: Date;

  @ManyToOne(() => Participant, (participant) => participant.timeslots)
  participant: Participant;
}
