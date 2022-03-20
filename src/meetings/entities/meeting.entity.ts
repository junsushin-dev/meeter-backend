import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MeetingDate } from './meeting-date.entity';
import { Timeslot } from './timeslot.entity';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  meetingId: number;

  @Column()
  meetingTitle: string;

  @Column('text')
  meetingDesc: string;

  @Column('text')
  meetingUrl: string;

  @OneToMany(() => MeetingDate, (meetingDate) => meetingDate.meeting)
  availableDates: Date[];

  @Column('time')
  timeRangeStart: Date;

  @Column('time')
  timeRangeEnd: Date;

  @Column('datetime')
  scheduleStart: Date;

  @Column('datetime')
  scheduleEnd: Date;

  @OneToMany(() => Timeslot, (timeslot) => timeslot.meeting)
  timeslots: Timeslot[];
}
