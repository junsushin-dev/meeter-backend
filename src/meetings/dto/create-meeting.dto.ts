export class CreateMeetingDto {
  meetingTitle: string;
  meetingDesc: string;
  availableDates: Date[];
  timeRangeStart: Date;
  timeRangeEnd: Date;
}
