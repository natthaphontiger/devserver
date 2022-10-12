import { Test, TestingModule } from '@nestjs/testing';
import { HeaderuuidService } from './headeruuid.service';

describe('HeaderuuidService', () => {
  let service: HeaderuuidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeaderuuidService],
    }).compile();

    service = module.get<HeaderuuidService>(HeaderuuidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
