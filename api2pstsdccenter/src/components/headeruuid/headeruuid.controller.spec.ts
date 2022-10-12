import { Test, TestingModule } from '@nestjs/testing';
import { HeaderuuidController } from './headeruuid.controller';

describe('HeaderuuidController', () => {
  let controller: HeaderuuidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeaderuuidController],
    }).compile();

    controller = module.get<HeaderuuidController>(HeaderuuidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
