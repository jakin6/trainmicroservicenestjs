import { Test, TestingModule } from '@nestjs/testing';
import { UsersserviceService } from './usersservice.service';

describe('UsersserviceService', () => {
  let service: UsersserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersserviceService],
    }).compile();

    service = module.get<UsersserviceService>(UsersserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
