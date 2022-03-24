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

  @Column({ length: 6 })
  meetingUrlKey: string;

  @OneToMany(() => MeetingDate, (meetingDate) => meetingDate.meeting)
  availableDates: Date[];

  @Column('time')
  timeRangeStart: Date;

  @Column('time')
  timeRangeEnd: Date;

  @Column({ type: 'datetime', nullable: true })
  scheduleStart: Date;

  @Column({ type: 'datetime', nullable: true })
  scheduleEnd: Date;

  @OneToMany(() => Timeslot, (timeslot) => timeslot.meeting)
  timeslots: Timeslot[];
}
