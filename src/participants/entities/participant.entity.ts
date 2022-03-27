import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Timeslot } from './timeslot.entity';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  participantId: number;

  @Column()
  name: string;

  @OneToMany(() => Timeslot, (timeslot) => timeslot.participant)
  timeslots: Timeslot[];
}
