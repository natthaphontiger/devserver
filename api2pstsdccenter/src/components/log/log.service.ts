import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Logentity } from 'src/entitys/logentity.entity';
import { IsNull, Repository } from 'typeorm';
import { Loginterface } from 'src/interfaces/loginterface.interface';
import { Abortable } from 'events';
import { DataSource } from 'typeorm';

@Injectable()
export class LogService {

    constructor(
        @InjectRepository(Logentity)
        private readonly oReqpository: Repository<Logentity>
    ) { }

   C_PRCoInsertLog(poLog: Loginterface, ptHeadder: string): Loginterface[] {
        try {
            var tCompany: string = '';
            var tLogCode: string = '';
            var tResult:Loginterface[] = [];
            tCompany = poLog.FTCompany.toString();

            console.log('Header service :' + ptHeadder);
            if (ptHeadder == null) {
                return null;
            }
            else {
                from(this.oReqpository.save(poLog));
                tResult.push(poLog);

                return tResult;
            }
        }
        catch (oEx) {
            throw new NotFoundException({
                message: ['Task not found']
            })
        }
    }
}
