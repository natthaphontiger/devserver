import { Test, TestingModule } from '@nestjs/testing';
import { NotiapiController } from './notiapi.controller';

describe('NotiapiController', () => {
  let controller: NotiapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotiapiController],
    }).compile();

    controller = module.get<NotiapiController>(NotiapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
