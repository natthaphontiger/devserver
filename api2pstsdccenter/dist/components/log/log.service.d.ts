import { Logentity } from 'src/entitys/logentity.entity';
import { Repository } from 'typeorm';
import { Loginterface } from 'src/interfaces/loginterface.interface';
export declare class LogService {
    private readonly oReqpository;
    constructor(oReqpository: Repository<Logentity>);
    C_PRCoInsertLog(poLog: Loginterface, ptHeadder: string): Loginterface[];
}
