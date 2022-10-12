import { Module } from '@nestjs/common';
import { HeaderuuidController } from './headeruuid.controller';

@Module({
  controllers: [HeaderuuidController]
})
export class HeaderuuidModule {}
