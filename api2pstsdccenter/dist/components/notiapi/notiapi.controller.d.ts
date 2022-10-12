import { Msglineinterface } from 'src/interfaces/msglineinterface.interface';
import { NotiapiService } from './notiapi.service';
export declare class NotiapiController {
    private oNotiservice;
    constructor(oNotiservice: NotiapiService);
    C_POSTxMsgLine(post: Msglineinterface): void;
}
