import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logentity } from 'src/entitys/logentity.entity';
import { LogController } from './log.controller';
import { LogService } from './log.service';

@Module({
  imports: [TypeOrmModule.forFeature([Logentity])],
  providers: [LogService],
  controllers:[LogController]

})
export class LogModule {}
