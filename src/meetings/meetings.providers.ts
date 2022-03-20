import { Connection } from 'typeorm';
import { Meeting } from './entities/meeting.entity';

export const meetingProviders = [
  {
    provide: 'MEETING_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Meeting),
    inject: ['DATABASE_CONNECTION'],
  },
];
