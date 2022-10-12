import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NotiapiController } from './notiapi.controller';
import { NotiapiService } from './notiapi.service';

@Module({
    imports:[HttpModule],
    providers:[NotiapiService],
    controllers:[NotiapiController]
})
export class NotiapiModule {}
