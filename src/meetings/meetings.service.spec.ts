import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meeting } from './entities/meeting.entity';
import { MeetingsService } from './meetings.service';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<unknown>;
};

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({}),
);

describe('MeetingsService', () => {
  let service: MeetingsService;
  // let repositoryMock: MockType<Repository<Meeting>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MeetingsService,
        {
          provide: getRepositoryToken(Meeting),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<MeetingsService>(MeetingsService);
    // repositoryMock = module.get(getRepositoryToken(Meeting));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should convert id(number) to url key(base62)', () => {
    const id = 10000;
    const urlKey = service.convertIdToUrlKey(id);
    expect(urlKey).toBe('sLc');
  });

  it('should convert url key(base62) to id(number)', () => {
    const urlKey = 'sLc';
    const id = service.convertUrlKeyToId(urlKey);
    expect(id).toBe(10000);
  });
});
