import { Meeting } from 'src/meetings/entities/meeting.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export interface Timeslot {
  timeslotStart: Date;
  timeslotEnd: Date;
}

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  participantId: number;

  @Column()
  name: string;

  @ManyToOne(() => Meeting, (meeting) => meeting)
  meeting: Meeting;

  @Column({ type: 'json' })
  timeslots: Timeslot[];
}
