import { Body, Controller, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Loginterface } from 'src/interfaces/loginterface.interface';
import { LogService } from './log.service';
import { Headers } from '@nestjs/common';
import { Cmlreslog } from 'src/models/cmlreslog';

@Controller('log')
export class LogController {

    constructor(private oService: LogService) { }

    //Create Order
    @Post()
    C_POSToCreaerOrder(
        @Body() post: Loginterface,
        @Headers('x-api-key') ptKeyid: string
    ): Cmlreslog {


        const oLog = new Cmlreslog()
        const aoLog:[] = [];


        console.log(
            post.FNLogCode + "|" +
            post.FTAppCode + "|" +
            post.FTCompany + "|" +
            post.FTFunction + "|" +
            post.FTLogMsg + "|" +
            post.FTMenu + "|" +
            post.FTStaLog
        );
        
        oLog.rtData = this.oService.C_PRCoInsertLog(post, ptKeyid);
        oLog.rtResCode = '200';
        oLog.rtResDetail = 'Insert data  success';
        console.log('Res : ' + JSON.stringify(oLog));
        return oLog;

    }
}
