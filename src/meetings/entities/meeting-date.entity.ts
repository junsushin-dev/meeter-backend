import { PrimaryGeneratedColumn, ManyToOne, Column, Entity } from 'typeorm';
import { Meeting } from './meeting.entity';

@Entity()
export class MeetingDate {
  @PrimaryGeneratedColumn()
  meetingDayId: number;

  @Column('date')
  date: Date;

  @ManyToOne(() => Meeting, (meeting) => meeting.availableDates)
  meeting: Meeting;
}
