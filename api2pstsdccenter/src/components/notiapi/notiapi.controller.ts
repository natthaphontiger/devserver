import { Body, Controller, Post } from '@nestjs/common';
import { Msglineinterface } from 'src/interfaces/msglineinterface.interface';
import { NotiapiService } from './notiapi.service';

@Controller('notiapi')
export class NotiapiController {

    constructor(private oNotiservice:NotiapiService){}


    @Post()
    C_POSTxMsgLine(@Body() post: Msglineinterface) {
        console.log('Process ' + post.FTMsgLine);
        this.oNotiservice.C_SEVxPOSTApiLine(post.FTMsgLine);
    }

}
