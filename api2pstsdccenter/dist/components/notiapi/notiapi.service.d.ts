import { HttpService } from '@nestjs/axios';
export declare class NotiapiService {
    private httpService;
    http: any;
    constructor(httpService: HttpService);
    C_SEVxPOSTApiLine(ptMsg: string): Promise<void>;
}
