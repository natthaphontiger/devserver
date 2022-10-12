import { Test, TestingModule } from '@nestjs/testing';
import { NotiapiService } from './notiapi.service';

describe('NotiapiService', () => {
  let service: NotiapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotiapiService],
    }).compile();

    service = module.get<NotiapiService>(NotiapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
