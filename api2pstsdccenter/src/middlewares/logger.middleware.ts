import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { NotiapiModule } from 'src/components/notiapi/notiapi.module';
import { NotiapiService } from 'src/components/notiapi/notiapi.service';
import { NotiapiController } from 'src/components/notiapi/notiapi.controller';
import { Test } from 'src/components/notiapi/caxios';
import { Cnotiserver } from 'src/class/notiapi/cnotiserver';
import { Csp } from 'src/class/csp';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  oSyncNotiLine = new Cnotiserver();
  OSaveLog = new Csp();

  use(req: Request, res: Response, next: NextFunction) {
  console.log('Process Req : ' + req.url);
  console.log('Process Req : ' + req.method);
  console.log('Request process middleware');

  if(Cnotiserver.C_POSTbSyncNotiLine("Middleware","Request API","User : " + req.url))
  {
    Csp.SP_INSbSaveLog("Middleware","Request API","User : " + req.url);
  }
  else{
    Csp.SP_INSbSaveLog("Middleware","Request API","Sync Noti Line Fail...");
  }
  next();
}



}
