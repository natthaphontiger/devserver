import { Loginterface } from 'src/interfaces/loginterface.interface';
import { LogService } from './log.service';
import { Cmlreslog } from 'src/models/cmlreslog';
export declare class LogController {
    private oService;
    constructor(oService: LogService);
    C_POSToCreaerOrder(post: Loginterface, ptKeyid: string): Cmlreslog;
}
