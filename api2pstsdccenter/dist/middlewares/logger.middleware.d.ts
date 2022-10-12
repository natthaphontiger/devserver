import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Cnotiserver } from 'src/class/notiapi/cnotiserver';
import { Csp } from 'src/class/csp';
export declare class LoggerMiddleware implements NestMiddleware {
    oSyncNotiLine: Cnotiserver;
    OSaveLog: Csp;
    use(req: Request, res: Response, next: NextFunction): void;
}
